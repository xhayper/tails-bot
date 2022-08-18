const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

  if(!args[0]){
let user = message.author;
let embed = new Discord.RichEmbed()
    .setDescription(`Here's the avatar: \n[Avatar URL Link](${user.avatarURL})`)
    .setAuthor(`${user.username}#${user.discriminator}`, client.user.displayAvatarURL)
    .setImage(user.displayAvatarURL)
    .setColor('RANDOM')
    .setFooter("Requested by " + message.author.tag)
message.channel.send(embed);
  }
    
  else {
let usery = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let embed = new Discord.RichEmbed()
         .setDescription(`Here's the avatar: \n[Avatar URL Link](${usery.user.avatarURL})`)
         .setAuthor(`${usery.user.username}#${usery.user.discriminator}`, client.user.displayAvatarURL)
         .setImage(usery.user.displayAvatarURL)
         .setColor('RANDOM')
          .setFooter("Requested by " + message.author.tag)
message.channel.send(embed)
  };
}

exports.help = {
    name: "avatar",
    aliases: []
}