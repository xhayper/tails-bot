const Discord = require("discord.js");
const superagent = require("snekfetch");
module.exports.run = (client, message, args) => 

{

let user = message.mentions.users.first()
    superagent.get('https://nekos.life/api/v2/img/tickle')
     .end((err, response) => {
  
  let act = 'You have been tickled by '
  if(!user)
  {
    let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Tickle you`)
  .setImage(response.body.url)
  message.channel.send(embed);
  }
  
  else
  {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Nice! ${user.tag} ${act}${message.author.tag}`)
  .setImage(response.body.url)
  message.channel.send(embed);
    
  }
})
}
exports.help = {
    name: "tickle",
    aliases: []
}