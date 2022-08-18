const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  if(!args[0]) return message.channel.send(":warning: Please Input Bug Details ");
        let embed = new Discord.RichEmbed()
        // Set Author
        // Set the title of the field
        .setAuthor(' New Bug Report ', client.user.displayAvatarURL)
        .setThumbnail(message.author.displayAvatarURL)
        // Set the color of the embed
        .setColor('RANDOM')
        // Set the main content of the embed
        .addField(' Report By ', `${message.author.username}#${message.author.discriminator}`)
        .addField(' Report In ', message.guild.name)
        .addField(' Guild ID ', message.guild.id)
        .addField(' Bug Detail ', args.join(' '))
        // Set another Field
        .setFooter("Requested by " + message.author.tag)
  client.channels.get('554234847153881088').send(embed)
  message.channel.send("Reported!")
}
exports.help = {
    name: "bugreport",
    aliases: ['br']
}