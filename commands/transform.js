const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let transformto = args.slice(1).join(' ');
  message.delete()
  const transform = new Discord.RichEmbed()
  .addField("Oh no...", `<@${target.id}>` + " Transformed in to " + transformto)
  .setColor("BLACK")
  message.channel.send(transform)
}
exports.help = {
    name: "transform",
    aliases: []
}