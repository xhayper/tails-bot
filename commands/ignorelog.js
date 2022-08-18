const Discord = require("discord.js");
const Math = require("mathjs");
const db = require('quick.db');
module.exports.run = async (client, msg, args) => {
  //return msg.channel.send("**Coming Soon**");
  if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send('You don\'t have permission!')
  let list = db.fetch(`${msg.guild.id}_ignorelogs`)
  console.log(list)
  let id = msg.channel.id
  if(list.includes(msg.channel.id)) {
       let value = list.indexOf(id)
       db.delete(`${msg.guild.id}_ignorelogs`, id)
       msg.channel.send('From now on i will not ignore this channel!')
     return;
     } else {
       
       db.push(`${msg.guild.id}_ignorelogs`, msg.channel.id)
       msg.channel.send('Ignored This Channel!')
       return;
     }
 }

exports.help = {
    name: "ignorelog",
    aliases: []
}