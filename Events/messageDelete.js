const db = require('quick.db');
const Discord = require('discord.js');

module.exports = async (client, message) => {
  if(message.author.bot) return;
  const guild = message.guild
  if(message.author.id == client.user.id) return;
var logstatus = await db.fetch(`logs_${guild.id}_stat`);
let logschannel = await db.fetch(`logs_${guild.id}_channel`);

  if(logstatus === null) var logstatus = 'off'
  else var logstatus = logstatus
  
  if(logstatus != 'on') return;
  
  var currentDate = new Date();
  if(!message.cleanContent) var content = 'UNKNOWN'
  else var content = message.cleanContent
  const deletemessage = new Discord.RichEmbed()
  .setAuthor('A message has been deleted!')
  .addField('Channel', message.channel)
  .addField('Author', message.author)
  .addField('ID', message.id)
  .addField('Content', content)
  .setColor('RANDOM')
  .setThumbnail(message.author.displayAvatarURL)
  .setTimestamp(currentDate);
  
let rChannel = guild.channels.find(channel => channel.id === logschannel);
 rChannel.send(deletemessage).then(() => {
  })
}