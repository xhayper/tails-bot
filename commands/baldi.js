const Discord = require("discord.js");
const Math = require("mathjs");

module.exports.run = async (client, msg, args) => {
  //message.channel.send("**Coming Soon**");
  
        const correct = ["Aha, you got it!", "Great job! That's right!", "Good one!", "You're doing fantastic!", "I can't believe it... you're incredible!"]
    const corrects = correct[Math.floor(Math.random() * correct.length)];

var num1 = Math.floor(Math.random() * 99);
  var num2 = Math.floor(Math.random() * 99);
  let sum = `${num1}+${num2}`;
  let sub = `${num1}-${num2}`;
  var quest = [sum, sub];
  let questrand = quest[Math.floor(Math.random() * quest.length)]
  let confirm = Math.eval(questrand)
    let embed = new Discord.RichEmbed()
  .setAuthor("You Can Think Pad™")
  .setColor('RANDOM')
  .setThumbnail('https://cdn.glitch.com/33b28b82-dde3-49af-b0cc-9b1076049af1%2F06bd6594ae9f31af84c4a9c25c67269e.png?1550405594432')
  .setTitle("**SOLVE MATH IN 15 SECONDS**")
  .setDescription(questrand + " =...?")
  .setFooter("Type cancel to cancel!")
  //var evaluate = Math.eval(args);
  //return msg.channel.send(evaluate);
  try {
         const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { maxMatches:1, time: 15000, errors: ['time'] });
        await msg.channel.send(embed)
        collector.on('collect', msg => {
            if (msg.content.toLocaleLowerCase() == confirm) {
                return msg.channel.send(corrects);
            } else if (msg.content.toLocaleLowerCase() == "cancel") {
                return msg.channel.send("Cancelled");
            } else if (msg.content.toLocaleLowerCase() != confirm) {
                return msg.channel.send("WRONG! THE ANWSER IS "+confirm);
            }
          
        }
        );
         collector.on('end', collected => {
              if (collected.size === 0) {
               msg.channel.send("Too slow...");
                }
            });
          
        
  }
  catch(errors){
      console.error(errors);
      msg.channel.send("Error...");
  }
 }

exports.help = {
    name: "baldi2",
    aliases: []
}