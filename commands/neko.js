const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    superagent.get('https://nekos.life/api/v2/img/neko')
        .end((err, response) => {
      const neko = new Discord.RichEmbed()
      .setAuthor("Time for neko images, Meow~~")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(neko);
    })
}
exports.help = {
    name: "neko",
    aliases: []
}