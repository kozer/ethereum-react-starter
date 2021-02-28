const { assert } = require("chai");
const MyNFT = artifacts.require("./MyNFT.sol");

// @ts-ignore
contract("Color", (accounts) => {
  let contract;
  beforeEach(async () => {
    contract = await MyNFT.deployed();
  });
  describe("deployment", () => {
    it("deploys successfully", async () => {
      const address = contract.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
    it("has a name", async () => {
      const name = await contract.name();
      assert.equal(name, "MyNFT");
    });
  });
});
