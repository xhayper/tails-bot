const Discord = require('discord.js');

exports.run = (client, message, args, version) => {
  
        let embed = new Discord.RichEmbed()
        // Set Author
        .setAuthor("Join us")
        // Set the title of the field
        .setTitle('Click Here')
        // Set the color of the embed
        .setColor('RANDOM')
        // Set URL
        .setURL('https://discord.gg/h3GDT4K')
        // Set the main content of the embed
        .setDescription('^ Feel free to join ? Join now! ^')
        .setFooter("Requested by " + message.author.tag)

      // Send the embed to the same channel as the message
      message.channel.send(embed);
  
}
exports.help = {
    name: "support",
    aliases: []
}