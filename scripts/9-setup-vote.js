import {ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule =sdk.getVoteModule(
    "0x110b608a04eF3C7183e55E3E4e5359803c20A6eC",
);

const tokenModule=sdk.getTokenModule(
    "0x50cF543ee1f24bdB49EC925e3089D8e1D401f9f5",
);

(async()=>{
    try{
        await tokenModule.grantRole("minter",voteModule.address);

        console.log("Successfully gave vote module permissions to act on token module ");
        
    }catch(error) {
        console.error("failed to grant vote module permissions to act on token module",error);
        process.exit(1);
    }

    try{
        const ownedTokenBalance = await tokenModule.balanceOf(
            process.env.WALLET_ADDRESS
        );
        
        const ownedAmount=ethers.BigNumber.from(ownedTokenBalance.value);
        const percent90=ownedAmount.div(100).mul(90);

        await tokenModule.transfer(voteModule.address,percent90);
        console.log("Successfully transfered token to vote module");
        
    }catch(err){
        console.error("failed to transfer tokens to vote module",err);
    }
})();