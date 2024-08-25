const { ethers } = require("hardhat");

async function main() {
  const Calculator = await ethers.deployContract("SimpleStorage");
  await Calculator.waitForDeployment();

  console.log("Calculator deployed to:",await Calculator.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });