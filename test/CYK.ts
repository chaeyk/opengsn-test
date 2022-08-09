import { expect } from 'chai';
import hre from 'hardhat';

describe("CYK", function () {
	it('Should set initial supply', async function() {
		const accounts = await hre.ethers.getSigners();
		const account = accounts[0].address;

		const initialSupply = hre.ethers.utils.parseEther('1');
		const CYK = await hre.ethers.getContractFactory('CYK');
		const cyk = await CYK.deploy(initialSupply);

		const balanceOf = await cyk.balanceOf(account);

		expect(initialSupply).to.equal(balanceOf);
	})

});