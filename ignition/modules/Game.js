const {buildModule} = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("GameModule", (m) =>{
    const game = m.contract("GameT")
    return {game};
})

