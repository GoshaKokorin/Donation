// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Donation {
  address public owner; 
  address[] donaters;
  mapping(address => uint) Donations;
  
  constructor() {
    owner = msg.sender;
  }

  modifier onlyOwner() { 
    require(msg.sender == owner, "Sorry, u not owner"); 
    _;
  }

  function pay() external payable {
    require(msg.value > 0, "Donation must be greater than 0");
    if (Donations[msg.sender] == 0) {
      donaters.push(msg.sender);
    }
    Donations[msg.sender] += msg.value;
  }

  function donatersList() external view returns (address[] memory) {
    return donaters;
  }

  function donatorContribution(address _targetAddr) external view returns (uint) {
    require(Donations[_targetAddr] != 0, "There were no donations from this address");
    return Donations[_targetAddr];
  }

  function balance() external view returns(uint) {
    return address(this).balance;
  }

  function withdraw(address payable _targetAddr, uint _amount) external payable onlyOwner {
    require(_amount <= address(this).balance, "Not enough currency");
    _targetAddr.transfer(_amount);
  }
}