// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@opengsn/contracts/src/BasePaymaster.sol";

contract MyPaymaster is BasePaymaster {
    /**
     * Called by Relay (and RelayHub), to validate if the paymaster agrees to pay for this call.
     *
     * MUST be protected with relayHubOnly() in case it modifies state.
     *
     * The Paymaster rejects by the following "revert" operations
     *  - preRelayedCall() method reverts
     *  - the forwarder reverts because of nonce or signature error
     *  - the paymaster returned "rejectOnRecipientRevert", and the recipient contract reverted.
     * In any of the above cases, all paymaster calls (and recipient call) are reverted.
     * In any other case, the paymaster agrees to pay for the gas cost of the transaction (note
     *  that this includes also postRelayedCall revert)
     *
     * The rejectOnRecipientRevert flag means the Paymaster "delegate" the rejection to the recipient
     *  code.  It also means the Paymaster trust the recipient to reject fast: both preRelayedCall,
     *  forwarder check and receipient checks must fit into the GasLimits.acceptanceBudget,
     *  otherwise the TX is paid by the Paymaster.
     *
     *  @param relayRequest - the full relay request structure
     *  @param signature - user's EIP712-compatible signature of the {@link relayRequest}.
     *              Note that in most cases the paymaster shouldn't try use it at all. It is always checked
     *              by the forwarder immediately after preRelayedCall returns.
     *  @param approvalData - extra dapp-specific data (e.g. signature from trusted party)
     *  @param maxPossibleGas - based on values returned from {@link getGasAndDataLimits},
     *         the RelayHub will calculate the maximum possible amount of gas the user may be charged for.
     *         In order to convert this value to wei, the Paymaster has to call "relayHub.calculateCharge()"
     *  return:
     *      a context to be passed to postRelayedCall
     *      rejectOnRecipientRevert - TRUE if paymaster want to reject the TX if the recipient reverts.
     *          FALSE means that rejects by the recipient will be completed on chain, and paid by the paymaster.
     *          (note that in the latter case, the preRelayedCall and postRelayedCall are not reverted).
     */
    function preRelayedCall(
        GsnTypes.RelayRequest calldata relayRequest,
        bytes calldata signature,
        bytes calldata approvalData,
        uint256 maxPossibleGas
    )
    external relayHubOnly
    returns (bytes memory context, bool rejectOnRecipientRevert) {

	}

    /**
     * This method is called after the actual relayed function call.
     * It may be used to record the transaction (e.g. charge the caller by some contract logic) for this call.
     *
     * MUST be protected with relayHubOnly() in case it modifies state.
     *
     * @param context - the call context, as returned by the preRelayedCall
     * @param success - true if the relayed call succeeded, false if it reverted
     * @param gasUseWithoutPost - the actual amount of gas used by the entire transaction, EXCEPT
     *        the gas used by the postRelayedCall itself.
     * @param relayData - the relay params of the request. can be used by relayHub.calculateCharge()
     *
     * Revert in this functions causes a revert of the client's relayed call (and preRelayedCall(), but the Paymaster
     * is still committed to pay the relay for the entire transaction.
     */
    function postRelayedCall(
        bytes calldata context,
        bool success,
        uint256 gasUseWithoutPost,
        GsnTypes.RelayData calldata relayData
    ) external relayHubOnly {

	}

    function versionPaymaster() external pure override returns (string memory) {
		return "1.0";
	}
}
