const Discord = require("discord.js");
const Math = require("mathjs");

module.exports.run = async (client, message, args) => {
  for (var i = 60; i = 0;) {
    
      const correct = ["Aha, you got it!", "Great job! That's right!", "Good one!", "You're doing fantastic!", "I can't believe it... you're incredible!"]
    const corrects = correct[Math.floor(Math.random() * correct.length)];
  const firstnum = Math.floor(Math.random() * 100);
const secondnum = Math.floor(Math.random() * 100);
  const plus = `${firstnum} + ${secondnum}`
  const minus = `${firstnum} - ${secondnum}`
  const operator = [plus, minus]
  const question = operator[Math.floor(Math.random() * operator.length)];
  const answer = Math.eval(question)
    
   let embed = new Discord.RichEmbed()
  .setAuthor("You Can Think Pad™")
  .setColor('0x00FF00')
  .setThumbnail('https://cdn.glitch.com/33b28b82-dde3-49af-b0cc-9b1076049af1%2F06bd6594ae9f31af84c4a9c25c67269e.png?1550405594432')
  .setTitle("**- ＳＯＬＶＥ　ＭＡＴＨ　ＱＵＥＳＴＩＯＮ ！**")
  .setDescription("- " + question + "=")
  .addField("**Ｔｉｍｅ Ｌｅｆｔ** ", i + " Seconds")
  .setFooter("To cancel the command type 'cancel'")
   message.channel.send(embed)
    
     const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { maxMatches:1, time: 60000, errors: ['time'] });
  //End of embed
    collector.on('collect', msg => {
            if (msg.content.toLocaleLowerCase() == " ") {
                return msg.channel.send(embed)
            } else if (msg.content.toLocaleLowerCase() == "cancel") {
                return msg.channel.send(":no_good: Cancelled");
            }
  collector.on('end', collected => {
              if (collected.size === 0) {
               message.channel.send("The Timer Is Up!");
                }
            });     
    })
}
}
exports.help = {
    name: "speedmath",
    aliases: []
}