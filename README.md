This is the repository for certify.doc. It is a dapp that provides a single utility. It allows users to vouch for the authenticity of offline documents. 

It records certificates of authenticity on the blockchain. These certifiactes  relate two ethereum addresses (an issuer and recipient address) to the hash of a digital offline document. 
They are somewhat similar to non-fungible tokens (NFTs).

But in contrast to NFTs 
- These records cannot be traded or exchanged. They can only be revoked. 
- These records can be accessed by uploading the original document. No ethereum wallet required.  

Because these records are related to an offline document that can be send via email, social media or any other traditional method, it is extremely easy way to have those not familiar with blockchain technology interact with a dapp. 

## Getting Started
To view and use the deployed dapp, please visit its deployed instance on vercel: [https://project0-certify-doc.vercel.app/](https://project0-certify-doc.vercel.app/). 

To view and run the contract locally, see the file at: hardhat/contracts/CertifyDoc.sol. The Remix IDE is arguabbly the easiest way to locally run and test the contract. 

The address of the deployed contract on the goerli ethereum test network is 0xB4AfD5AA80a7D8e01BF3e7F3C8E3917a1De3790f. 

The repository also includes a simple testing suite. See hardhat/test/CertifyDocsTest.js.

## Notes on Development
The contract is extremely simple by intent. It does not depend on outside solidity libraries (for instance from OpenZeppelin), does not interact with other contracts and is not upgradable.  

The main reason for this is that I used this app as an educational project while learning solidity and javascript (react/next). I aimed to write a very basic contract that I could subsequently extend and develop. 

## To Dos 
### Current Contract (v0.1) 
- Optimize gas usage. 
- Set fixed length of messages (making gas estimation easier). 

### Future Contract (v0.2) 
- Implement optional link of file hashes to uploaded files to IPFS. 
- Making use of hashing alg flexible, recording what hashing protocol has been used. 
- Implement upgradable contract. Making the data slots of certificates flexible, and enabling flexible upgrading of types of certificates - while still enabling backwards compatability. 
- Enabling use of the Graph on contract (meaning that emitting of events needs to be further developed). 