const Discord = require("discord.js");
const Math = require("mathjs");
const db = require('quick.db');
module.exports.run = async (client, msg, args) => {
  var emojilist = []
msg.guild.emojis.forEach(emojis => {
  emojilist.push(`<:${emojis.name}:${emojis.id}>`)
});
  const embed = new Discord.RichEmbed()
  .addField(`Emoji list for ${msg.guild.name}[${emojilist.length}]`, emojilist.join(' '))
  .setColor('RANDOM')
  msg.channel.send(embed)
 }

exports.help = {
    name: "emojis",
    aliases: []
}