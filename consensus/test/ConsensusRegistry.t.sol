// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/ConsensusRegistry.sol";

contract ConsensusRegistryTest is Test {
    ConsensusRegistry public registry;

    function setUp() public {
        registry = new ConsensusRegistry();
    }

    function testSubmitRecord() public {
    uint id = registry.submitRecord(
        "test prompt",
        "QmCID",
        "agree",
        85
    );

    ConsensusRegistry.Record memory record = registry.getRecord(id);

    assertEq(record.prompt, "test prompt");
    assertEq(record.cid, "QmCID");
    assertEq(record.result, "agree");
    assertEq(record.agreement, 85);
}
}