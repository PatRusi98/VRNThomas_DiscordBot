import DiscordJS, {Intents} from "discord.js";

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log('Bot is online')
})

client.login('OTI4NDQ1NjUzODEyNjY2Mzc4.YdY4ZQ.Chbw5X8exWq6rGMs2wc0-JiRpq8')