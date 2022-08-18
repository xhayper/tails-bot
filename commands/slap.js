const Discord = require("discord.js");
const superagent = require("snekfetch");
module.exports.run = (client, message, args) => 

{

let user = message.mentions.users.first()
    superagent.get('https://nekos.life/api/v2/img/slap')
     .end((err, response) => {
  
  let act = ' You have been slapped by '
  if(!user)
  {
    let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`You slaps youself..?`)
  .setImage(response.body.url)
  message.channel.send(embed);
  }

  else
  {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Oh no!, ${user.username}#${user.discriminator} ${act}${message.author.tag}`)
  .setImage(response.body.url)
  message.channel.send(embed);
    
  }
})
}
exports.help = {
    name: "slap",
    aliases: []
}