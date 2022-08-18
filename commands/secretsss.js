const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if(message.author.id !== '436763513407537152' && message.author.id !== '574062963397492796') return message.channel.send("**Only Bot Creator Can Use This**");

message.delete()
let embed = new Discord.RichEmbed()
    .setImage("https://cdn.glitch.com/33b28b82-dde3-49af-b0cc-9b1076049af1%2F4515a9af4d65d9aa8113822d71e2d7b9.png?1550329501035")
    .setColor('RANDOM')
    .setFooter("Requested by " + message.author.tag)
message.channel.send(embed);
  
  message.delete()
let embed2 = new Discord.RichEmbed()
    .setImage("https://cdn.glitch.com/33b28b82-dde3-49af-b0cc-9b1076049af1%2FBrother%20OC.jpg?1550402918285")
    .setColor('RANDOM')
    .setFooter("Requested by " + message.author.tag)
message.channel.send(embed2);

}

exports.help = {
    name: "secretsss",
    aliases: []
}