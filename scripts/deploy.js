const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Aang", "Pikachu", "Sandwich", "Brump"],       // Names
    [
      "https://i.imgur.com/xVu4vFL.png", 
      "https://i.imgur.com/WMB6g9u.png",
      "https://i.imgur.com/QbLpo0P.jpeg",
      "https://i.imgur.com/PwfJMAo.jpeg"
    ],
    [100, 200, 300, 400],                    // HP values
    [100, 50, 25, 12], // Attack values
    ['Staff', 'Thunder', 'Ketchup', 'Insurrection'],                 // Weapons
    "Bowser", // B Name
    "https://i.imgur.com/wwioAna.png",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  // let txn;
  // txn = await gameContract.mintCharacterNFT(0);
  // await txn.wait();
  // console.log("Minted NFT #1");

  // txn = await gameContract.mintCharacterNFT(1);
  // await txn.wait();
  // console.log("Minted NFT #2");

  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();
  // console.log("Minted NFT #3");

  // txn = await gameContract.attackBoss();
  // await txn.wait();
  
  // txn = await gameContract.attackBoss();
  // await txn.wait();  



  console.log("Done deploying!");
  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(0);
  console.log("Token URI:", returnedTokenUri);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();