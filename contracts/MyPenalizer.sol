// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@opengsn/contracts/src/Penalizer.sol";

contract MyPenalizer is Penalizer {
    constructor(
        uint256 _penalizeBlockDelay,
        uint256 _penalizeBlockExpiration
    ) Penalizer(_penalizeBlockDelay, _penalizeBlockExpiration) {
    }
}
