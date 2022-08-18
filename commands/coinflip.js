const Discord = require('discord.js');

exports.run = (client, message, args, version) => {
  
  const headsortails = Math.floor(Math.random() * 2) == 0 ? "Heads" : "Tails"
  if(headsortails == "Tails") var img = 'https://cdn.discordapp.com/attachments/545093079133192212/554511003279425558/kisspng-sonic-chaos-tails-sonic-runners-sonic-adventure-so-vector-flower-fox-tail-5ad984d0667ad7.854.png'
  if(headsortails == "Heads") var img = 'https://cdn.discordapp.com/attachments/545093079133192212/554510521387188239/d5vwx3i-ee23c5e7-e859-40ba-b882-1043b4ced3a4.png'
  let embed = new Discord.RichEmbed()
  .setTitle("Coin Flip")
  .setImage(img)
  .setDescription("The coin landed on " + `**${headsortails}**!`)
  .setColor("RANDOM")
        .setFooter("Requested by " + message.author.tag)

      // Send the embed to the same channel as the message
      message.channel.send(embed);
  
}
exports.help = {
    name: "coinflip",
    aliases: ['cf']
}