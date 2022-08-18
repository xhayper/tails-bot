const Discord = require('discord.js');

exports.run = (client, message, args, version) => {
  
        let embed = new Discord.RichEmbed()
        // Set Author
        .setAuthor("Invite Bot")
        // Set the title of the field
        .setTitle('Click here!')
        // Set the color of the embed
        .setColor('RANDOM')
        // Set URL
        .setURL('https://discordapp.com/oauth2/authorize?client_id=594502544303325209&scope=bot&permissions=8')
        // Set the main content of the embed
        .setDescription('^If you want to invite me click this link!^')
        .setFooter("Requested by " + message.author.tag)

      // Send the embed to the same channel as the message
      message.channel.send(embed);
  
}
exports.help = {
    name: "invite",
    aliases: ['invbot']
}