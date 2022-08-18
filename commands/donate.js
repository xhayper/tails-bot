const Discord = require('discord.js');

exports.run = (client, message, args, version) => {
  
        let embed = new Discord.RichEmbed()
        // Set Author
        .setAuthor("Donate Me")
        // Set the title of the field
        .setTitle('If you want to donate me, Click here!')
        // Set the color of the embed
        .setColor('RANDOM')
        // Set URL
        .setURL('https://donatebot.io/checkout/541235305039265825')
        // Set the main content of the embed
        .setDescription('^ Click this link! ^')
        .setFooter("Requested by " + message.author.tag)

      // Send the embed to the same channel as the message
      message.channel.send(embed);
  
}
exports.help = {
    name: "donate",
    aliases: []
}