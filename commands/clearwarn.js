const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  
  if(!message.member.hasPermission("MANAGE_ROLES") && message.author.id != process.env.DarkSub) return message.channel.send("You don't have permission!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(":warning: Couldn't find that user!");
  let reason = args.join(" ").slice(1);

let logstatus = await db.fetch(`modlogs_${message.guild.id}_stat`);
let logschannel = await db.fetch(`modlogs_${message.guild.id}_channel`);

if(logstatus === null) var logstatuss = 'off'
else var logstatuss = logstatus

let warns = await db.fetch(`warns_${wUser.id}_${message.guild.id}`);

  if(warns === null) var warnss = '0'
  else var warnss = warns
  
  db.delete(`warnsr_${wUser.id}_${message.guild.id}`)
  
  if(warnss == '0') return message.channel.send('That user doesn\'t have any warn!');
  
  db.set(`warns_${wUser.id}_${message.guild.id}`, '0')

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Clear Warns")
  .setAuthor(message.author.tag)
  .addField("User", wUser.user.tag)
  .setTimestamp(message.createdAt)
  .setColor('RANDOM');

if(logstatuss == 'on') {
  
  let warnchannel = message.guild.channels.find(g => g.id === logschannel);
  
  warnchannel.send(warnEmbed);
  
  message.channel.send('Cleared All The Warn For ' + wUser.user.tag + '!');

return;
} else {
message.channel.send('Cleared All The Warn For ' + wUser.user.tag + '!');
}
}
exports.help = {
    name: "clearwarn",
    aliases: ["cwarn"]
}