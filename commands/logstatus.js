const Discord = require("discord.js");
const db = require('quick.db');
module.exports.run = async (client, msg, args) => {
if(msg.author.id != '154072279959994369') return;
var logstatus = await db.fetch(`logs_${msg.guild.id}_stat`);
if(logstatus === null) var logs = 'Off';
if(logstatus == 'on') var logs = 'On';
if(logstatus == 'off') var logs = 'Off'
let logschannel = await db.fetch(`logs_${msg.guild.id}_channel`);
if(logschannel === null) var logsc = 'None'
else var logsc = `<#${logschannel}>`;
const embed = new Discord.RichEmbed()
.setAuthor('Logs Status Menu')
.addField('Status', logs)
.addField('Logs Channel', logsc)
.setColor('RANDOM');
msg.channel.send(embed);
}
exports.help = {
    name: "logstatus",
    aliases: ['lgs']
}