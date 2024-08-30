// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "../config/BaseTest.t.sol";
import "../../veION/veION.sol";

contract VotingEscrowNFTTest is BaseTest {
  veION ve;
  function afterForkSetUp() internal override {
    super.afterForkSetUp();
    ve = new veION();
    ve.initialize();
  }

  function testCreateLockVE() public fork(MODE_MAINNET) {}
}
