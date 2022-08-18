const Discord = require('discord.js');
const moment = require("moment");
const fs = require('fs');
let configreport = JSON.parse(fs.readFileSync("./reportconfig.json", "utf8"));

exports.run = async (client, message, args, prefix) => {
  
  if(args[0] == 'channel') {
  if(!message.member.hasPermission("MANAGE_CHANNELS") && message.author.id != process.env.DarkSub) return message.channel.send("<:tickNo:600229699029041152> You don't have permissions to set channel!");
  if(!args[0]) return message.channel.send(":warning: Please specify a channel!");
  if(!message.mentions.channels.first()) return message.channel.send('<:tickNo:600229699029041152> Please Mention A Channel!');
  let channels = message.mentions.channels.first().id
  configreport[message.guild.id] = {
    reportchannel: channels
  }
  
  fs.writeFile("./reportconfig.json", JSON.stringify(configreport), (err) => {
     if(err) console.log(err);
  })
  
  message.channel.send(`:white_check_mark: Report channel has been set to **<#${channels}>**`);
  return;
}
  
    if(!configreport[message.guild.id]) return message.channel.send('<:tickNo:600229699029041152> Please Setup A Channel! Type report channel {Mention A Channel}');
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send(":warning: Couldn't find a user.")
    if(rUser.hasPermission('ADMINISTRATOR') && message.author.id !== process.env.DarkSub) return message.channel.send("<:tickNo:315009174163685377> You can't report an administrator!");
    const reportchannel = configreport[message.guild.id].reportchannel
    
  if(!args[0]) return message.channel.send('<:tickNo:600229699029041152> Wrong Arguement! prefix + report {Member} (reason)')
  
  var reason = args.join(" ").slice(22);
  if(!reason) var reason = 'None'
    
  let rembed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("RANDOM")
  .addField(`Reported User`,`${rUser}`)
  .addField(`Reported by`,`${message.author}`)
  .addField(`Channel`, message.channel)
  .addField(`Time`, moment().format('MMMM Do YYYY, h:mm:ss a'))
  .addField(`Reason`, reason)
  
let rChannel = message.guild.channels.find('id', reportchannel);
  if(!rChannel) return message.channel.send(":warning: Couldn't find report channel please type, prefix + report channel {Mention A Channel}");
  message.delete().catch(O_o=>{})
 rChannel.send(rembed).then(() => {
    message.channel.send(':ok_hand: The Report Ticket Has Been Sended!')
  })
  
  
  return;
}
exports.help = {
    name: "report",
    aliases: []
}