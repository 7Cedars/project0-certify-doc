// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/**
    * @dev This is a (very) simple solidity contract that relates a hash to a blockchain record
    * consisting of two addresses, the date and time. 
    * At the frontend, the hash is taken from an offline document 
*/

contract CertifyDoc {
    /**
    * @dev creates certificate struct. Consists of hash of document, issuer address, recipient address, a description and date of issuance. 
    * @param docHash The hash of a document. 
    * @param issuer The address of the issuer.
    * @param recipient The (optional) address of a recipient.
    * @param datetime Time of issuing record. As given by block.timestamp. 
    * @param description An (optional) description of the hashed document.  
    */
    struct certificate {
        bytes32 docHash;
        address issuer;
        address recipient;
        uint datetime;
        string description;
    }
    /** @dev Array of certificates. */ 
    certificate[] public certificates; // 
    
    /** @dev Event for logging creation of a certificate */ 
    event CertificateIssued(bytes32 indexed docHash, uint indexed index);
    
    /**
    * @dev to be able to retrieve certificates per document, issuer or recipient later on, we create four mappings: 
    * @dev mapping1: certificate indexes *per document*. (key = docHash, value is index of certificates)   
    */ 
    mapping(bytes32 => uint[]) public docHashMap; 
    
    /** @dev mapping2: certificate indexes *per issuer*. (key = msg.sender, value is index of certificates) */ 
    mapping(address => uint[]) public issuerMap;   
    
    /** @dev mapping3: a map of certificate indexes per document. (key = address, value is index of certificates) */ 
    mapping(address => uint[]) public recipientMap;

    /** @dev mapping4: a map of index to address. (key = string of docHash, value address) */ 
    mapping(bytes32 => address) public docHashOwnerMap;

    /**
    * @dev creating certificates. 
    * Note that location of certificate in certificates array is also mapped in relation to docHash, issuer, and recipient.  
    * @param _docHash The hash of a document. 
    * @param _recipient The (optional) address of a recipient.
    * @param _description An (optional) description of the hashed document.  
    */ 
    function certify(bytes32 _docHash, address _recipient, string memory _description) public {        

            certificate storage newCertificate = certificates.push(); 
            newCertificate.docHash = _docHash; 
            newCertificate.issuer = msg.sender; 
            newCertificate.recipient = _recipient;  // can I make this optional? 
            newCertificate.description = _description; // can I make this optional? 
            newCertificate.datetime = block.timestamp;

            docHashMap[_docHash].push(certificates.length -1);
            issuerMap[msg.sender].push(certificates.length -1);
            recipientMap[_recipient].push(certificates.length -1);

            /*
            * If this is the first time this docHash is being certified, the issuer is set as its owner. 
            * The owner of the docHash can revoke any subsequent certificate linked to this docHash. 
            * docHashOwner is transferrable (see function changeDocHashOwner below). 
            */
            if (docHashOwnerMap[_docHash] == 0x0000000000000000000000000000000000000000) {
                docHashOwnerMap[_docHash] = msg.sender;
            }
            
            // An event is emited when a new certificate is issued. 
            emit CertificateIssued(_docHash, certificates.length -1); 
    }

    /**
    * @dev Transfer ownership of docHash to another contract. -- This is for extended version. 
    *
    *    function changeDocHashOwner(string memory _docHash, address newDocHashOwner) public {
    *        require(msg.sender == docHashOwnerMap[_docHash], "You are not the owner of this docHash.");
    *        docHashOwnerMap[_docHash] = newDocHashOwner;
    *    }
    */
    
    /** @dev retrieves index of certificates per docHash.  */ 
    function checkDocHash(bytes32 _docHash) public view returns ( uint[] memory ) {  
        return (docHashMap[_docHash]);
    } 
    
    /** @dev returns true if the  msg.sender is owner of the docHash. */ 
    function checkOwner(bytes32 _docHash) public view returns ( bool ) {
        return (msg.sender == docHashOwnerMap[_docHash]); 
    }
    
    /** @dev retrieves index of certificates per issuer of msg.sender. */ 
    function checkIssuer(address _requestedAddress) public view returns ( uint[] memory ) {  
        return issuerMap[_requestedAddress];
    }
    
    /** @dev retrieves index of certificates per recipient of msg.sender. */ 
    function checkRecipient(address _requestedAddress) public view returns ( uint[] memory ) {
        return recipientMap[_requestedAddress];
    }

    /** @dev Retrieves a single certificate based on index.
    * Idea is that frontend first calls checkDocHash or checkSender, and subsequently does a loop to this function. 
    * This places computational demand on side of frontend, not the blockchain backend. 
    * Note that it IS possible to call certificates at random. Certificates are public! 
    */
    function callCertificate(uint index) public view returns (
      bytes32, address, address, string memory, uint
      ) {
        return (
          certificates[index].docHash,
          certificates[index].issuer,
          certificates[index].recipient,
          certificates[index].description,
          certificates[index].datetime
        );
    }

    /** 
    * @dev Issuer, recipient and docHashOwner have ability to delete certificate. 
    * @param index: index of certificate to be revoked. 
    */ 
    function revokeCertificate(uint index) public {
        require(msg.sender == certificates[index].issuer || 
            msg.sender == certificates[index].recipient ||
            msg.sender == docHashOwnerMap[certificates[index].docHash], 
            "You are not allowed to revoke this certificate.");
        
        delete certificates[index];
    }
}