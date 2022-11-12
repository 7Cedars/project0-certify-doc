/*
This is a first version of chai tests for the Contract. 
Not everything is being tested at the moment, so it will still 
be expanded later on. 
*/ 

const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const hre = require("hardhat");
const { ethers, network } = require("hardhat");

const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { Contract } = require("hardhat/internal/hardhat-network/stack-traces/model")

describe("CertifyDoc", function () {
  // Creating two fixtures.
  // One for deploying contract, and one for issuing certificate. 
  async function deployCertifyDocs() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const CertifyDoc = await ethers.getContractFactory("CertifyDoc");
    const certifyDoc = await CertifyDoc.deploy();

    return { certifyDoc, owner, otherAccount };
  }

  async function issueCertificate() {

    const { certifyDoc, otherAccount, owner } = await loadFixture(deployCertifyDocs);
    let _docHash = "0x56570de287d73cd1cb6092bb8fdee6173974955fdef345ae579ee9f475ea7432"
    let _message = "This is a random message."
  
    await certifyDoc.certify(
      _docHash, 
      otherAccount.address, 
      _message
      )
    
    return { certifyDoc, owner, otherAccount, _docHash, _message }
    }

  describe("Issuing Certificates", function () {
    it("Should be able to issue a certificate with a recipient and message included", async function () {
      const { certifyDoc, otherAccount } = await loadFixture(deployCertifyDocs);
      let _docHash = "0x56570de287d73cd1cb6092bb8fdee6173974955fdef345ae579ee9f475ea7432"
      let _message = "This is a random message."
    
    await expect(certifyDoc.certify(
      _docHash, 
      otherAccount.address, 
      _message
      )).not.to.be.reverted;  
    });

    it("Should fail to issue a certificate if dochash is not a hash", async function () {
      const { certifyDoc, owner, otherAccount } = await loadFixture(deployCertifyDocs);
      let _docHash = "not_a_hash"
      let _message = "This is a random message."

      await expect(certifyDoc.certify(
          _docHash,
          otherAccount.address,
          _message
          )).to.be.rejected;
    });

    it("Should fail to issue a certificate if recipient is not an address", async function () {
      const { certifyDoc, owner, otherAccount } = await loadFixture(deployCertifyDocs);
      let _docHash = "0x56570de287d73cd1cb6092bb8fdee6173974955fdef345ae579ee9f475ea7432"
      let otherAddress = "not_an_address"
      let _message = "This is a random message."

      await expect(certifyDoc.certify(
          _docHash,
          otherAddress,
          _message
          )).to.be.rejected;
    });

    it("Should emit event when certificate is issued", async function () {
      const { certifyDoc, owner, otherAccount } = await loadFixture(deployCertifyDocs);
      let _docHash = "0x56570de287d73cd1cb6092bb8fdee6173974955fdef345ae579ee9f475ea7432"
      let _message = "This is a random message."

      await expect(certifyDoc.certify(
                  _docHash,
                  otherAccount.address,
                  _message
                  )).to.emit(certifyDoc, "CertificateIssued")
                    .withArgs(_docHash, anyValue); 
      });
    });

  describe("Calling certificates", function () {
    it("Should call correct certificate using docHash", async function () {
      const { certifyDoc, owner, otherAccount, _docHash, _message} = await loadFixture(issueCertificate)

      index = await certifyDoc.checkDocHash("0x56570de287d73cd1cb6092bb8fdee6173974955fdef345ae579ee9f475ea7432")
      certificate = await certifyDoc.callCertificate(parseInt(index))

      expect(certificate[0]).to.equal(_docHash);
      expect(certificate[1]).to.equal(owner.address);
      expect(certificate[2]).to.equal(otherAccount.address);
      expect(certificate[3]).to.equal(_message);
    });

    it("Should call correct certificate using owner address", async function () {
      const { certifyDoc, owner, otherAccount, _docHash, _message} = await loadFixture(issueCertificate)

      index = await certifyDoc.checkIssuer(owner.address)
      certificate = await certifyDoc.callCertificate(parseInt(index))

      expect(certificate[0]).to.equal(_docHash);
      expect(certificate[1]).to.equal(owner.address);
      expect(certificate[2]).to.equal(otherAccount.address);
      expect(certificate[3]).to.equal(_message);
    });

    it("Should call correct certificate using recipient address", async function () {
      const { certifyDoc, owner, otherAccount, _docHash, _message} = await loadFixture(issueCertificate)

      index = await certifyDoc.checkRecipient(otherAccount.address)
      certificate = await certifyDoc.callCertificate(parseInt(index))

      expect(certificate[0]).to.equal(_docHash);
      expect(certificate[1]).to.equal(owner.address);
      expect(certificate[2]).to.equal(otherAccount.address);
      expect(certificate[3]).to.equal(_message);
    });
  });

  describe("Revoking certificate", function () {
    it("Should revoke certificate if issuer is owner.address", async function () {
      const { certifyDoc } = await loadFixture(issueCertificate)
      await expect(certifyDoc.revokeCertificate(0)).not.to.be.reverted;  

    });
  });

  // NB: There are still more tests to insert here. 
  // For many of these I need to change the owner.address. 
  // It will take a bit of time to insert these. TO DO. 
});
