const Discord = require("discord.js");
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages],
  partials: [Partials.Channel],
  repliedUser: true,
  allowedMentions: {
    parse: ["users", "roles", "everyone"],
  },
});
/*
const client = new Discord.Client({
  allowedMentions: {
    parse: ["users", "roles", "everyone"],
  },
  repliedUser: true,
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_PRESENCES",
    "GUILD_VOICE_STATES",
    "DIRECT_MESSAGES",
  ],
  partials: ["CHANNEL"],
});
*/
require("dotenv").config();
const token = process.env.TOKEN;
client.events = new Discord.Collection();

//client.Messages.setURL(process.env.MONGODB_SRV);

let handlers = ["event_handler"]
handlers.forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
}
);
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => {
    console.log("Connected to mongoosedb");
  })
  .catch((err) => {
    console.log("eee", err);
  });
process.on("unhandledRejection", (err) => {
  console.log(err);
  /*client.channels.cache.get("906575123769872384").send(
    {
      embeds: [new Discord.EmbedBuilder()
        .setAuthor({ name: "Unhandled Rejection Error", iconURL: "https://media.discordapp.net/attachments/909344848761466881/914921123261603890/PicsArt_11-29-10.19.20.png" })
        .addFields({
          name: "Error",
          value: `\`\`\`yaml\n${err}\n\`\`\``
        })
        .setColor("#ff3235")
      ],
      content: '<@&907611368784535582>'
    })*/
});
client.login(token); /* 
client.on("debug", function (info) {
  console.log(`debug -> ${info}`);
}); */
