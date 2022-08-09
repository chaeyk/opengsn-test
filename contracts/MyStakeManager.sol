// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@opengsn/contracts/src/StakeManager.sol";

contract MyStakeManager is StakeManager {
    constructor(uint256 _maxUnstakeDelay)  StakeManager(_maxUnstakeDelay) {

    }
}
