const Discord = require("discord.js");
const superagent = require("node-fetch");
module.exports.run = (client, message, args) => 

{

let user = message.mentions.users.first()
    superagent.get('https://nekos.life/api/v2/img/pat')
     .end((err, response) => {
  
  let act = ' You have been patted by '
  if(!user)
  {
    let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Pat you `)
  .setImage(response.body.url)
  message.channel.send(embed);
  }
  
  else
  {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`>w< ${user.username}#${user.discriminator} ${act}${message.author.tag}`)
  .setImage(response.body.url)
  message.channel.send(embed);
    
  }
})
}
exports.help = {
    name: "pat",
    aliases: []
}