const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let reason = args.slice(1).join(' ');
  
  let msg = message
  
if(!args[0]) return msg.channel.send(`Mention Someone Or Give Me Their ID`)
if(target.id == client.user.id) return message.channel.send('You want to kick me out?')
if(target.id == process.env.DarkSub && target.id == process.env.Nakaria) return message.channel.send('You want to kick my best friend?')
if(!message.member.hasPermission('KICK_MEMBERS') && message.author.id !== process.env.DarkSub && message.author.id !== process.env.Nakaria) return message.channel.send(":warning: **Error : You don't have permission to kick a member!**");
if(!target) return message.channel.send(":warning: **Error : Please specify a member to kick!**");
if(!reason) return message.channel.send(":warning: **Error : Please specify a reason for this kick!**");
if(message.author.id === target.id) return message.channel.send("<:tickNo:600229699029041152> You gonna **Kick** yourself?");
if(target.highestRole.position >= message.member.highestRole.position && message.author.id !== process.env.DarkSub && message.author.id !== process.env.Nakaria) { return message.channel.send(":warning: **Error : You can't kick member with higher role than you!**"); }
if(!target.kickable) return message.channel.send("<:tickNo:600229699029041152> **Error : I can't kick this member!**");
  var embedColor = 'RANDOM';
  var kickEmbed = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField('Kicked member', `${target.user.username}#${target.user.discriminator}\n|-ID: ${target.user.id}`)
    .addField('Kicked by', `${message.author.username}#${message.author.discriminator}\n|-ID: ${message.author.id}`)
    .addField('Reason:', reason)
    .setTimestamp();
  
  var warningEmbed = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField('Kicked by', message.author.tag)
    .addField('Reason:', reason)
    .setTimestamp();
  
  target.kick().then(target => target.send(`Get out! You've been kicked in **${message.guild.name}**!`, warningEmbed))
  return message.channel.send(`<:tickYes:600229800816410654> Hehe... User Successfully Kicked!`, kickEmbed);
  message.delete();
      if(message.author.id === process.env.DarkSub && message.author.id === process.env.Nakaria);
    {
    message.channel.send("<:tickYes:600229800816410654> **Bot Owner** bypass Server's permission!");
    }
  
  let embed = new Discord.RichEmbed()
.setColor("ORANGE")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.IconURL)
.addField("Action:", "Kick")
.addField("Moderated on:", `${target.username} (${target.id}`)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.addField("Date:", message.createdAt.toLocaleString())


let guildconfig = JSON.parse(fs.readFileSync("./guildsconfig.json", "utf8"));
  
        if(!guildconfig[message.guild.id]){
     guildconfig[message.guild.id] = {
      logs: 'off',
      logschannel: 'none'
     }
  }

 if(guildconfig[message.guild.id].logs != 'on') return;
  
  let logschannel = guildconfig[message.guild.id].logschannel
  //let rChannel = message.guild.channels.find(channel => channel.id === logschannel);
 // rChannel.send(embed)
  
  
}

exports.help = {
    name: "kick",
    aliases: []
}