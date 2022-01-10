const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const welcome = require("./welcome");

client.on("ready", () => {
    console.log("Bot is online");

    welcome(client);
});

client.login(config.token);