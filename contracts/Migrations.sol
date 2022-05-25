// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Migrations {
  address public owner = msg.sender;
  uint256 public lastCompletedMigration;

  modifier restricted() {
    require(msg.sender == owner, "Role: Must be contract's owner");
    _;
  }

  function setCompleted(uint256 completed) public restricted {
    lastCompletedMigration = completed;
  }
}
