// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20{
  constructor(string memory name, string memory symbol, uint256 cap) ERC20(name, symbol) {
    _mint(msg.sender,cap);
  }
}