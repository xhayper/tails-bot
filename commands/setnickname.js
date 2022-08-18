const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db');

exports.run = async(client, msg, args) => {
if(msg.author.id != '436763513407537152') return msg.channel.send('Bot owner only :V');
msg.guild.members.get(client.user.id).setNickname(args.join(' '));
if(!args[0]) return msg.channel.send('Please provide a nickname!');
msg.channel.send('Changed The Nickname to ' + args.join(' '));
}

exports.help = {
    name: "setnickname",
    aliases: ['nickname', 'setnick', 'nick']
}