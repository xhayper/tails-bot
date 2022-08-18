const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete()
let embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/545093079133192212/551750435250241547/ezgif.com-crop.gif")
    .setColor('RANDOM')
message.channel.send(embed);
}
exports.help = {
    name: "loading",
    aliases: []
}