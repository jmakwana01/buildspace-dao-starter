import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x1b7C0B392B983941EFA36559CB52e7E47634D139",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "GARY Fuck Face",
        description: "This NFT will give you access to SHIT SHOW AT FUCK FACTORY!",
        image: readFileSync("scripts/assets/fuckfactory.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()