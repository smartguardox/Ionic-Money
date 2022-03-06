// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "./RewardsDistributorStorage.sol";

contract RewardsDistributorDelegator is RewardsDistributorDelegatorStorage {
  /// @notice Emitted when implementation is changed
  event NewImplementation(address oldImplementation, address newImplementation);

  constructor(
    address admin_,
    address rewardToken_,
    address implementation_
  ) {
    // Admin set to msg.sender for initialization
    admin = msg.sender;

    delegateTo(implementation_, abi.encodeWithSignature("initialize(address)", rewardToken_));

    _setImplementation(implementation_);

    admin = admin_;
  }

  /**
   * @notice Called by the admin to update the implementation of the delegator
   * @param implementation_ The address of the new implementation for delegation
   */
  function _setImplementation(address implementation_) public {
    require(msg.sender == admin, "RewardsDistributorDelegator::_setImplementation: admin only");
    require(
      implementation_ != address(0),
      "RewardsDistributorDelegator::_setImplementation: invalid implementation address"
    );

    address oldImplementation = implementation;
    implementation = implementation_;

    emit NewImplementation(oldImplementation, implementation);
  }

  /**
   * @notice Internal method to delegate execution to another contract
   * @dev It returns to the external caller whatever the implementation returns or forwards reverts
   * @param callee The contract to delegatecall
   * @param data The raw data to delegatecall
   */
  function delegateTo(address callee, bytes memory data) internal {
    (bool success, bytes memory returnData) = callee.delegatecall(data);
    assembly {
      if eq(success, 0) {
        revert(add(returnData, 0x20), returndatasize())
      }
    }
  }

  /**
   * @dev Delegates the empty call data execution to an implementation contract.
   * It returns to the external caller whatever the implementation returns
   * or forwards reverts.
   */
  receive() external payable {
    _fallback("");
  }

  /**
   * @dev Delegates execution to an implementation contract.
   * It returns to the external caller whatever the implementation returns
   * or forwards reverts.
   */
  fallback() external payable {
    _fallback(msg.data);
  }

  function _fallback(bytes memory data) internal {
    // delegate all other functions to current implementation
    (bool success, ) = implementation.delegatecall(data);

    assembly {
      let free_mem_ptr := mload(0x40)
      returndatacopy(free_mem_ptr, 0, returndatasize())

      switch success
      case 0 {
        revert(free_mem_ptr, returndatasize())
      }
      default {
        return(free_mem_ptr, returndatasize())
      }
    }
  }
}
