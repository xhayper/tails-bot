const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

   let plsembed = args.join(' ');
message.delete()
let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag + " Said", message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setDescription(plsembed)
message.channel.send(embed);
}
exports.help = {
    name: "embed",
    aliases: []
}