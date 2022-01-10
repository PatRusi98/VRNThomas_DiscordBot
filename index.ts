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

client.on('messageCreate', (message) => {
    if (message.content === 'hello there') {
        message.reply({
            content: 'obi wan kenobi',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'co by na to povedal marek?') {
        message.reply({
            content: 'koncis v rookie stars',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'have a nice day Peter') {
        message.reply({
            content: 'vyhul prdel',
        })
    }
})



client.login('OTI4NDQ1NjUzODEyNjY2Mzc4.YdY4ZQ.7CI1liX5Ps31F7C-91vFNzG_u4g')