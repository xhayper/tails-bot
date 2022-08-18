const Discord = require('discord.js');

exports.run = (client, message, args) => {    

   let embed = new Discord.RichEmbed()
        // Set Author
        .setAuthor('Help menu')
        // title of the field
        .addField(':shield: Moderation', 'kick, ban, unban, purge, tempmute, mute, unmute, report, logs, permissions, warn, warnings, clearwarn')
        // Set the color of the embed
        .setColor('RANDOM')
        // Set the main content of the embed
        // Set the new Field
        .addField(':smile: Fun', 'avatar, say, baldi, embed, openup, coinflip')
        .addField(':zzz: Emotinal ', 'slap, hug, kiss, tickle, cuddle, pat')
        .addField(':frame_photo: Picture ', 'dog, cat, neko, tails, servericon')
        // Set another Field
        .addField(':question: Info', 'serverinfo, userinfo, botinfo')
        //.addField(':musical_note: Music', 'play, stop, resume, np, queue, skip, pause')
        // Set anotherrrrr Field
        .addField(':thinking: Other', 'ping, support, invite, setprefix, autoconfig, verify')
        // Set the footer which is display the author request
        .setFooter("Requested by " + message.author.tag)

      // Send the embed to the same channel as the message
      message.channel.send(embed);
}
exports.help = {
    name: "oldhelp",
    aliases: []
}