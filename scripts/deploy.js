const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying.....")
  const simpleStorage = await SimpleStorage.deploy()
  await simpleStorage.deployed()

  console.log(`Deployed contract to : ${simpleStorage.address}`)

  const retrieveOutput = await simpleStorage.retrieve()
  console.log(`current value is ${retrieveOutput}`)

  const addValue = await simpleStorage.store(5)
  await addValue.wait(1)
  const retriveAgain = await simpleStorage.retrieve()
  console.log(`Updated value is : ${retriveAgain}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


main().then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exit(1);
});