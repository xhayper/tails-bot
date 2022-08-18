const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db');

exports.run = async(client, msg, args) => {
  if(!msg.member.hasPermission("MANAGE_GUILD") && msg.author.id != process.env.DarkSub) return msg.channel.send(":warning: You don't have permissions to set prefix!");
  if(!args[0]) return msg.channel.send(":warning: Please specify a prefix!");
  
  db.set(`prefix_${msg.guild.id}`, args.join(' '))
  
  msg.channel.send(`<:tickNo:600229800816410654> Prefix has been set to **${args[0]}**`);
}

exports.help = {
    name: "setprefix",
    aliases: ['prefix', 'pref', 'sp']
}