   
const db = require('quick.db');
const Discord = require('discord.js');

module.exports = async (client, oldUser, newUser) => {

let servers = client.guilds.filter(g => g.members.has(newUser.id));
          servers.forEach(async server => {
  var logstatus = await db.fetch(`logs_${server.id}_stat`);
let logschannel = await db.fetch(`logs_${server.id}_channel`);
  if(logstatus === null) var logstatus = 'off'
  else var logstatus = logstatus
  
    if(logstatus != 'on') return;
            
            let rChannel = server.channels.find(channel => channel.id === logschannel);
            if(!rChannel) return;
            
    var currentDate = new Date();
    const update = new Discord.RichEmbed()
    .setTitle('A user change has been made!')
    .setColor('RANDOM')
    .addField('Mention', newUser)
    .setThumbnail(newUser.displayAvatarURL)
    .setFooter(newUser.tag, newUser.displayAvatarURL)
    .setTimestamp(currentDate);
    if(oldUser.discriminator != newUser.discriminator) {
      update.addField('Old Tag', '#' + oldUser.discriminator)
      update.addField('New Tag', '#' + newUser.discriminator)
      rChannel.send(update)
      return;
    }
    if(oldUser.username != newUser.username) {
      update.addField('Old Username', oldUser.tag)
      update.addField('New Username', newUser.tag)
      update.setThumbnail(newUser.displayAvatarURL)
      rChannel.send(update)
      return;
    }
    if(oldUser.avatar != newUser.avatar) {
      update.setDescription(`Old Avatar\n [Avatar Link Click Here](${oldUser.displayAvatarURL})`)
      update.setImage(oldUser.displayAvatarURL)
      const update2 = new Discord.RichEmbed()
    .setTitle('A user change has been made!')
    .setDescription(`New Avatar\n [Avatar Link Click Here](${newUser.displayAvatarURL})`)
     .setImage(newUser.displayAvatarURL)
      .addField('Mention', newUser)
    .setColor('RANDOM')
    .setFooter(newUser.tag, newUser.displayAvatarURL)
    .setTimestamp(currentDate);
    rChannel.send(update)
    rChannel.send(update2)
    return;
    }
})
}