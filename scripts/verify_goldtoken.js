const etherToWei = (n) => {
    return new web3.utils.BN(web3.utils.toWei(n.toString(), 'ether'));
  };
const TOTAL_SUPPLY = etherToWei(1000_000);
const contractAddress = "0x75b5fbD15B048AA1E3dBeADcE29D1cdb871E5B4e";

async function main() {
    await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [
     TOTAL_SUPPLY.toString()
    ],
  });
}

main();