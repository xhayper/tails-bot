const db = require('quick.db');
const Discord = require('discord.js');

module.exports = async (client, guild, user) => {
  
  var logstatus = await db.fetch(`logs_${guild.id}_stat`);
let logschannel = await db.fetch(`logs_${guild.id}_channel`);

  
  if(logstatus != 'on') return;

  
  var currentDate = new Date();
  const banned = new Discord.RichEmbed()
  .setAuthor('Member Banned')
  .addField('Name', user.username)
  .addField('ID', user.id)
  .setColor('RANDOM')
  .setTimestamp(currentDate);
  let rChannel = guild.channels.find(channel => channel.id === logschannel);
 rChannel.send(banned).then(() => {
  })
  
}