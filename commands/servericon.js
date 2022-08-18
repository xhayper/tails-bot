const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {

      let guild = message.guild
      const servericon = new Discord.RichEmbed()
      .setDescription(`${message.guild.name}'s Icon : \n[Server Icon Link](${message.guild.iconURL})`, message.guild.iconURL)
      .setImage(guild.iconURL)
      .setFooter('Current Prefix: ' + prefix)
      .setTimestamp()
      .setColor(`RANDOM`)
  message.channel.send(servericon);
  
  
}
exports.help = {
    name: "servericon",
    aliases: ['sicon']
}