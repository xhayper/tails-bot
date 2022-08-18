const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
        let embed = new Discord.RichEmbed()
        // Set Author
        // Set the title of the field
        .setTitle('Please Calm Down!')
        // Set the color of the embed
        .setColor('RANDOM')
        // Set the main content of the embed
        .setDescription('^ Click Here! ^')
        // Set another Field
        .setURL('https://www.youtube.com/watch?v=kRu7xXyeWOY')
        .setFooter("Requested by " + message.author.tag)

      // Send the embed to the same channel as the message
      message.channel.send(embed);
  
}
exports.help = {
    name: "calm",
    aliases: []
}