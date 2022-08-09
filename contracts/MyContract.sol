// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@opengsn/contracts/src/BaseRelayRecipient.sol";

contract MyContract is BaseRelayRecipient {

	string private text = "hello";

	constructor(address forwarder) {
		_setTrustedForwarder(forwarder);
	}

	function setMsg(string memory s) public {
		text = s;
	}
	
	function hello() public view returns (string memory) {
		return text;
	}

    function versionRecipient() external virtual override view returns (string memory) {
		return "1.0";
	}
}
