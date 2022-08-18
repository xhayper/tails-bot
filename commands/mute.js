const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

          const cuser = new Discord.RichEmbed()
  .addField(":warning: Error", "I couldn't find that user.")
  .setColor("RED")
  
          const botself = new Discord.RichEmbed()
  .addField("<:tickNo:600229699029041152> Seems you are trying to tape me but you can't","You can't mute me!")
  .setColor("RED")
  
          const myourself = new Discord.RichEmbed()
  .addField("<:tickNo:600229699029041152> Trying to tape you but you run away","You can't mute yourself!")
  .setColor("RED")
  
          const error1 = new Discord.RichEmbed()
  .addField("<:tickNo:600229699029041152> Error", "You don't have **Manage Message** Permission!")
  .setColor("RED")
     
          const incorrect = new Discord.RichEmbed()
  .addField(":warning: Wrong Arguement", "mute {Mention} {reason}")
  .setColor("RED")

          const error2 = new Discord.RichEmbed()
  .addField(":warning: The user that you're trying to mute","is higher than you!")
  .setColor("RED")

          const error3 = new Discord.RichEmbed()
  .addField(":warning: Trying to tape that user but they run away","You can't mute them!")
  .setColor("RED")
          
    
      if(!args[1]) return message.channel.send(incorrect);
    var reason = args.slice(1).join(' ');
  if(!reason) var reason = 'None';
    if (!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== process.env.DarkSub) return message.channel.send(error1);
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.channel.send(cuser);
    if (message.author.id === tomute.id) return message.channel.send(myourself);
    if (tomute.id == client.user.id) return message.channel.send(botself);
    if (tomute.highestRole.position >= message.member.highestRole.position && message.author.id !== process.env.DarkSub) return message.channel.send(error2);
    if (tomute.highestRole.position >= message.guild.me.highestRole.position) return message.channel.send(error3);
    let muterole = message.guild.roles.find(role => role.name === "🤬Muted🤬");

    if (!muterole) return message.channel.send(':warning: Please Run The Auto Config Command, prefix + autoconfig or prefix + ac')

  const success = new Discord.RichEmbed()
  .addField("<:tickYes:600229800816410654> Success!", `<@${tomute.id}> has been muted!`)
  .addField('Reason', reason)
  .setColor("GREEN")

    await (tomute.addRole(muterole.id));
    message.channel.send(success);

}
exports.help = {
    name: "mute",
    aliases: []
}