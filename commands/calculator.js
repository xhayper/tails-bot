const Discord = require("discord.js");
const Math = require("mathjs");

module.exports.run = async (client, msg, args) => {
  //message.channel.send("**Coming Soon**");
  //var evaluate = Math.eval(args);
  //return msg.channel.send(evaluate);
  try {    
    
let confirm = Math.eval(args.join(''))
let embed = new Discord.RichEmbed()
.setAuthor('Caculator')
.addField(':pencil: Input', args.join(''))
.addField(':white_check_mark: Answer', confirm)
.setColor('RANDOM')
msg.channel.send(embed)
  }
  catch(errors){
      console.error(errors);
      msg.channel.send("⚠️ Plz provide me a equation so I can solve it for you");
  }
 }

exports.help = {
    name: "calculator",
    aliases: ["calc"]
}