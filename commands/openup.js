const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete()
let embed = new Discord.RichEmbed()
    .setAuthor("FBI OPEN UP")
    .setImage("https://cdn.discordapp.com/attachments/545093079133192212/552476656271622174/tenor.gif")
    .setColor('RANDOM')
    .setFooter(message.author.tag + " Has Called FBI!!!", message.author.displayAvatarURL)
message.channel.send(embed);
}
exports.help = {
    name: "openup",
    aliases: []
}