const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");

exports.run = async(client, msg, args) => {
  
  if(!msg.member.hasPermission("MANAGE_GUILD") && msg.author.id != process.env.DarkSub) return msg.channel.send(":no_entry_sign: You don't have permissions to set log channel/ status!");
  
let logstatus = await db.fetch(`logs_${msg.guild.id}_stat`);
let logschannel = await db.fetch(`logs_${msg.guild.id}_channel`);
  
if (logstatus === null) var sstatus = 'off'
else var sstatus = logstatus;
if (logschannel === null) var dachannel = 'None'
else var dachannel = `<#${logschannel}>`;

  if(sstatus == 'off') var status = 'Off'
  if(sstatus == 'on') var status = 'On'
  
   const arguement = new Discord.RichEmbed()
  .setAuthor('Wrong Arguement')
  .setColor('RANDOM')
  .setDescription('logs on/off or logs channel {Mention A Channel}')
  .addField('Example', 'logs channel #example\nlogs on\nlogs off')
  .addField('Status', 'Log : ' + status + "\n Current Log Channel : " + dachannel)
  if(!args[0]) return msg.channel.send(arguement);
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
  
  if(args[0] == 'channel') {
  if(!msg.mentions.channels.first()) return msg.channel.send('Please Mention A Channel!');
  let channels = msg.mentions.channels.first().id
  
  db.set(`logs_${msg.guild.id}_channel`, channels)
  msg.channel.send(`:white_check_mark: Logs channel has been set to **<#${channels}>**`);
    return;
  }
  
if(dachannel == 'None') return msg.channel.send('Please Setup A Channel!');
  
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
  
  else if(args[0] == 'on') {
    if(sstatus == 'on') return msg.channel.send('The Log Is Already On');
    const on = 'on';
    db.set(`logs_${msg.guild.id}_stat`, on)
  msg.channel.send(`:white_check_mark: Logs has been turned on.`);

    return;
  }
  
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
  
    else if(args[0] == 'off') {
    if(sstatus == 'off') return msg.channel.send('The Log Is Already Off');
    const off = 'off';
   db.set(`logs_${msg.guild.id}_stat`, off)
  msg.channel.send(`:white_check_mark: Logs has been turned off.`);
  } 
  else {
      msg.channel.send("Invalid Logs Configuration!");
    return;
  }
  
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
}
exports.help = {
    name: "logs",
    aliases: []
}