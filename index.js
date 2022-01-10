import DiscordJS, {Intents} from "discord.js";

const Discord = require("discord.js");
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const config = require("./package.json");
const welcome = require("./welcome");
const {Intents} = require("discord.js");

client.on("ready", () => {
    console.log("Bot is online");

    welcome(client);
});

client.login(config.token);