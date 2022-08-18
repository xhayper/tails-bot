const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  message.delete()
  message.channel.send(args.join(', '))
}
exports.help = {
    name: "split",
    aliases: []
}