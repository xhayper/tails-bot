const Discord = require('discord.js');
const moment = require("moment");

exports.run = (client, message, args, dhm) => {
  
if(!args[0]){
var user = message.author;
} else {
var yuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(yuser === null) return message.channel.send('Invalid User!')
var user = yuser.user;
}
  
 const member = message.guild.member(user);
  var today = new Date();
  
if (user.presence.status == 'dnd') { 
  var status = 'Do Not Disturb'
  var color = "RED";
};
  
if (user.presence.status == 'streaming') {
  var status = 'Streaming'
  var color = "DARK_PURPLE";
};
  
if (user.presence.status == 'online') { 
  var status = 'Online'
  var color = "GREEN";
};
  
if (user.presence.status == 'idle') { 
  var status = 'Idle'
  var color = "YELLOW";
};
  
if (user.presence.status == 'offline') {
  var status = 'Offline'
  var color = "DARK_GRAY";
  }
  
  var joinDiscordmilliseconds = moment(new Date()).diff(user.createdAt, 'milliseconds');
  var joinago = dhm(joinDiscordmilliseconds);
  
  
  
  
  if(!user.bot) var abot = 'Normal User'
  if(user.bot) var abot = 'Bot User'
  
var roles = member.roles.map(roles => `${roles}`).slice(1).join('|')
if(!roles) var roles = 'None'
if(!user.presence.game) var currentgame = 'None'
else var currentgame = user.presence.game


const embed = new Discord.RichEmbed()
.setColor(color)
.setThumbnail(user.displayAvatarURL)
.setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL)
.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : `Nothing`}`, true)
.addField("ID", `${user.id}`, true)
.addField("Joined At:", `${moment.utc(user.joinedAt).format("LLL")}`, true)
.addField("Created At:", `${moment.utc(user.createdAt).format("LLL")}`, true)
.addField("User Type:", `${abot}`,true)
.addField("Status:", `${status}`, true)
.addField("Current Game:", currentgame)
.addField("Account Age:", `${joinago}`, true)
.setFooter(moment().format('MMMM Do YYYY, h:mm a'))
.addField(`Roles[${member.roles.size - 1}]:`, roles)
message.channel.send({embed});
}

exports.help = {
    name: "userinfo",
    aliases: ['ui']
}