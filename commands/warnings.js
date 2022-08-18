const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  
if(!args[0]){
var wUser = message.author;
} else {
var yuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(yuser === null) return message.channel.send('Invalid User!')
var wUser = yuser.user;
}
  
  if(!message.member.hasPermission("MANAGE_ROLES") && message.author.id != process.env.DarkSub) return message.channel.send("You don't have permission. (Ban)");

let warns = await db.fetch(`warns_${wUser.id}_${message.guild.id}`);

  if(warns === null) var warnss = '0'
  else var warnss = warns
  
  message.channel.send(wUser.tag + ' Have ' + warnss + ' Warns!');
  
}
exports.help = {
    name: "warnings",
    aliases: ["warns"]
}