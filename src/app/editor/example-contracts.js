'use strict'

var infer = `
pragma solidity ^0.4.18;

contract AIContract {
  uint256[] input_data;
  uint256[] infer_output = new uint256[](uint256((1 * 10 + 31) >> 5));
  
  constructor() public {
      input_data = new uint256[]((1 * 3 * 32 * 32 + 31) >> 5);
  }
  
  function Infer(address model, address input) public returns (uint256) {
    // feed data in input to model and store the output in infer_output
    infer(model, input, infer_output);
    return infer_output[0];
  }
  
  function InferArray(address model) public returns (uint256) {
    // feed data in input_data to model and store the output in infer_output
    inferArray(model, input_data, infer_output);
    return infer_output[0];
  }
}
`

var ballotTest = `
pragma solidity >=0.4.22 <0.6.0;
import "./ballot.sol";

contract test3 {
   
    Ballot ballotToTest;
    function beforeAll () public {
       ballotToTest = new Ballot(2);
    }
    
    function checkWinningProposal () public {
        ballotToTest.vote(1);
        Assert.equal(ballotToTest.winningProposal(), uint(1), "1 should be the winning proposal");
    }
    
    function checkWinninProposalWithReturnValue () public view returns (bool) {
        return ballotToTest.winningProposal() == 1;
    }
}
`

module.exports = {
  infer: { name: 'infer.sol', content: infer },
  //ballot_test: { name: 'ballot_test.sol', content: ballotTest }
}
