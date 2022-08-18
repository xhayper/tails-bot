const Discord = require('discord.js');

exports.run = (client, message, args) => {

    const error1 = new Discord.RichEmbed()
  .addField("<:tickNo:600229699029041152> Error", "You don't have **Manage Message** Permission!")
  .setColor("RED")
    const error2 = new Discord.RichEmbed()
  .addField("<:tickNo:600229699029041152> Error", "You must mention someone to unmute them.")
  .setColor("RED")
    const error3 = new Discord.RichEmbed()
  .addField("<:tickNo:600229699029041152> Error", "I cannot unmute that member")
  .setColor("RED")
    const error4 = new Discord.RichEmbed()
  .addField("<:tickNo:600229699029041152> Error", "My role position is lower than that person!")
  .setColor("RED")
let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (user.highestRole.position >= message.guild.me.highestRole.position) return message.channel.send(error4); 
if (!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== process.env.DarkSub) return message.channel.send(error1);
if (message.mentions.users.size < 1) return message.channel.send(error2).catch(console.error);
let role = message.guild.roles.find(role => role.name === "🤬Muted🤬");

 if (!user.roles.find(`name`, "🤬Muted🤬")) return message.channel.send(':warning: That member aren\'t muted!')
message.guild.member(user).removeRole(role);
  
   const done = new Discord.RichEmbed()
  .addField("<:tickYes:600229800816410654> Success!", "Unmuted " + `<@${user.id}>!`)
  .setColor("GREEN")
   message.channel.send(done)
   }

exports.help = {
    name: "unmute",
    aliases: []
}