const Discord = require("discord.js");
const db = require('quick.db');
const Math = require("mathjs");

module.exports.run = async (bot, message, args) => {
  let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let reason = args.slice(1).join(' ');
  
  if(!message.member.hasPermission("MANAGE_ROLES") && message.author.id != process.env.DarkSub) return message.channel.send("You don't have permission to warn a member!");
  if(!wUser) return message.channel.send(":warning: Couldn't find that user!");
  if(!reason) return message.channel.send(":warning: Couldn't warn that user without reason");
  if(wUser.id == message.author.id) return message.channel.send('You Can\'t Warn Your Self');
  if(wUser.highestRole.position >= message.member.highestRole.position && message.author.id !== process.env.DarkSub) { return message.channel.send("You can't warn member with a higher role than you"); }
  if(!wUser.warnable) return message.channel.send(":warning: I can't warn this member!");

let logstatus = await db.fetch(`modlogs_${message.guild.id}_stat`);
let logschannel = await db.fetch(`modlogs_${message.guild.id}_channel`);

if(logstatus === null) var logstatuss = 'off'
else var logstatuss = logstatus

let warns = await db.fetch(`warns_${wUser.id}_${message.guild.id}`);

  if(warns === null) var warnss = '0'
  else var warnss = warns
  var newwarns = Math.eval(warnss + 1)
  db.set(`warns_${wUser.id}_${message.guild.id}`, newwarns)

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.tag)
  .addField("User", wUser.user.tag)
  .addField("Warned by", message.author.tag)
  .addField("Number of Warnings", newwarns)
  .addField("Reason", reason)
  .setTimestamp(message.createdAt)
  .setColor('RANDOM');

if(logstatuss == 'on') {
  
let warnchannel = message.guild.channels.find(c => c.id === logschannel);
  
warnchannel.send(warnEmbed);
  
message.channel.send(wUser.user.tag + ' Has Been Warned!\nWarned By : ' + message.author.tag + '\nCurrent Warn : ' + newwarns + '\nReason : ' + reason);

return;
} else {
message.channel.send(wUser.user.tag + ' Has Been Warned!\nWarned By : ' + message.author.tag + '\nCurrent Warn : ' + newwarns + '\nReason : ' + reason);
}
}
exports.help = {
    name: "warn",
    aliases: []
}