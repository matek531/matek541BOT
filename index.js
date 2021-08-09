const Discord = require('discord.js');
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS
  ]
});
const config = require('./config.json');

client.on('ready', () =>{
    console.log('BOT JEST GOTOWYXDDDDDDDDDD!')
})


client.login(config.token);