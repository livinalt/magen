// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ConsensusRegistry {

    struct Record {
        string prompt;
        string cid;          // IPFS hash
        string result;       // consensus result
        uint256 agreement;   // percentage (0–100)
        address submitter;
        uint256 timestamp;
    }

    uint256 public recordCount;

    mapping(uint256 => Record) public records;

    event RecordSubmitted(
        uint256 indexed id,
        string cid,
        string result,
        uint256 agreement,
        address indexed submitter
    );

    /**
     * @dev Store a new AI consensus record
     */
    function submitRecord(
        string memory _prompt,
        string memory _cid,
        string memory _result,
        uint256 _agreement
    ) public returns (uint256) {
        require(_agreement <= 100, "Invalid agreement");

        uint256 id = recordCount;

        records[id] = Record({
            prompt: _prompt,
            cid: _cid,
            result: _result,
            agreement: _agreement,
            submitter: msg.sender,
            timestamp: block.timestamp
        });

        recordCount++;

        emit RecordSubmitted(
            id,
            _cid,
            _result,
            _agreement,
            msg.sender
        );

        return id;
    }

    /**
     * @dev Get a record
     */
    function getRecord(uint256 _id)
        public
        view
        returns (Record memory)
    {
        return records[_id];
    }
}