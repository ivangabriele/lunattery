// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Adoption {
  address[16] public adopters;

  function adopt(uint256 petId) public returns (uint256) {
    require(petId >= 0 && petId <= 15, "Pet ID must be between 0 and 15");

    adopters[petId] = msg.sender;
  }

  function getAdopters() public view returns (address[16] memory) {
    return adopters;
  }
}
