const { Client } = require("discord.js");
const client = new Client({ intents: 131071 });

client.once("ready", () => {
  console.log("Online!");
});

client.login(
  "OTg5MjQxMzcyNjI2MjcyMjk2.GlttUx.yJJrHv0XDSZibHUK2bNRcL_1QbBUAYIpmQE-XE"
);
