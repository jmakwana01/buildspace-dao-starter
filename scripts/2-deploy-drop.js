import {ethers }from "ethers";
import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

const app=sdk.getAppModule("0x9f2B87d912eafceA21C0258248f45152AE2C89d7");

(async()=>{
    try{
        const bundleDropModule=await app.deployBundleDropModule({

            name:"FUCK FACTORY",
            description:"ENTRY TO THE FUCK FACTORY",

            image:readFileSync("scripts/assets/fuckfactory.jpeg"),

            primarySaleRecipientAddress:ethers.constants.AddressZero,
        });

        console.log(
            "Successfully deployed bundle drop module , address,",bundleDropModule.address
        );
        console.log(
            "bundleDrop Metadata:",
            await bundleDropModule.getMetadata(),
        );
    }
    catch(error) {
        console.log("Failed to deployed bundledROP",error);
    }
})()