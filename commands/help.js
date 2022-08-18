const Discord = require('discord.js');
const config = require("../config.json");
const moment = require("moment");
const fs = require("fs");
const db = require('quick.db');

exports.run = async (client, message, args, version) => {
let fetched = await db.fetch(`prefix_${message.guild.id}`);
if (fetched == null) var prefix = 'T!';
else var prefix = fetched;
  
  
        /*let embed = new Discord.RichEmbed()
        // Set Author
        .setAuthor('Help commands')
        // title of the field
        .addField(':shield: Moderation', 'kick, ban, purge, tempmute, unmute')
        // Set the color of the embed
        .setColor('RANDOM')
        // Set the main content of the embed
        // Set the new Field
        .addField(':smile: Fun', 'avatar, say, baldi, embed, openup, coinflip')
        .addField(':zzz: Emotinal ', 'slap, hug, kiss, tickle, cuddle, pat')
        .addField(':frame_photo: Picture ', 'dog, neko, tails')
        // Set another Field
        .addField(':question: Info', 'serverinfo, userinfo, botinfo')
        .addField(':musical_note: Music ', 'play, stop, resume, np, queue, skip, pause')
        // Set anotherrrrr Field
        .addField(':thinking: Other', 'ping, support, invite, donate, setprefix')
        .addField(':no_entry_sign: NSFW', 'nekonsfw')
        // Set anotherrrrrrr Field
        .setFooter("Requested by " + message.author.tag)

      // Send the embed to the same channel as the message
      message.channel.send(embed);
  */
  
  
  //Config Embed
  
  let moderation = new Discord.RichEmbed()
  .setAuthor('Moderation Menu')
  .addField('kick', prefix + 'kick {user} {reason}')
  .addField('ban', prefix + 'ban {user} {reason}')
  .addField('unban', prefix + 'unban {id/username#tag}')
  .addField('purge', prefix + 'purge {number of message + 1 }')
  .addField('tempmute', prefix + 'tempmute {user} {duration} {reason}')
  .addField('mute', prefix + 'mute {user} {reason}')
  .addField('unmute', prefix + 'unmute {user}')
  .addField('report', prefix + 'report {user} {reason} or ' + prefix + 'report channel {Mention A Channel}')
  .addField('logs', prefix + 'logs on/off or ' + prefix + 'logs channel {Mention A Channel}')
  .addField('modlogs', prefix + 'modlogs on/off or ' + prefix + 'modlogs channel {Mention A Channel}')
  .addField('permissions', prefix + 'permissions or ' + prefix + 'permissions (user id/mention a user)')
  .addField('warn', prefix + 'warn {mention or userid}')
  .addField('clearwarn', prefix + 'clearwarn {mention or userid}')
  .addField('warnings', prefix + 'warnings {mention or userid}')
  .setColor('RANDOM')
  
  
 
  let support = new Discord.RichEmbed()
  .setAuthor('Support Menu')
  .addField('bugreport', prefix + 'bugreport {Bug Details}')
  .addField('donate', prefix + 'donate')
  .setColor('RANDOM')
 
  
  
  let fun = new Discord.RichEmbed()
  .setAuthor('Fun Menu')
  .addField('Note : ', '{} require () doesn\'t require')
  .addField('avatar', prefix + 'avatar (user)')
  .addField('say', prefix + 'say {text}')
  .addField('baldi', prefix + 'baldi')
  .addField('embed', prefix + 'embed {message}')
  .addField('openup', prefix + 'openup')
  .addField('coinflip', prefix + 'coinflip')
  .setColor('RANDOM')
  
  
  
  let emotinal = new Discord.RichEmbed()
  .setAuthor('Roleplay Menu')
  .addField('slap', prefix + 'slap {user}')
  .addField('hug', prefix + 'hug {user}')
  .addField('kiss', prefix + 'kiss {user}')
  .addField('tickle', prefix + 'tickle {user}')
  .addField('cuddle', prefix + 'cuddle {user}')
  .addField('pat', prefix + 'pat {user}')
  .setColor('RANDOM')
  
  

  let picture = new Discord.RichEmbed()
  .setAuthor('Picture Menu')
  .addField('dog', prefix + 'dog')
  .addField('cat', prefix + 'cat')
  .addField('neko', prefix + 'neko')
  .addField('tails', prefix + 'tails')
  .addField('servericon', prefix + 'servericon')
  .setColor('RANDOM')

  
  
  let info = new Discord.RichEmbed()
  .setAuthor('Info menu')
  .addField('Note : ', '{} require () doesn\'t require')
  .addField('Note : ', 'serverinfo2 and serverinfo3 can only get the information of the server that bot in')
  .addField('serverinfo', prefix + 'serverinfo (ID)')
  .addField('userinfo', prefix + 'userinfo (Mention a user/ ID)')
  .addField('botinfo', prefix + 'botinfo')
  .setColor('RANDOM')
  
  
  
  /*let music = new Discord.RichEmbed()
  .setAuthor('Music Menu')
  .addField('play', prefix + 'play {URL, SONGNAME}')
  .addField('stop', prefix + 'stop')
  .addField('volume', prefix + 'volume {1-100}')
  .addField('resume', prefix + 'resume')
  .addField('np', prefix + 'np')
  .addField('skip', prefix + 'skip')
  .addField('pause', prefix + 'pause')
  .addField('leave', prefix + 'leave')
  .setColor('RANDOM')*/
  
  
  
  let other = new Discord.RichEmbed()
  .setAuthor('Other Menu')
  .addField('ping', prefix + 'ping')
  .addField('support', prefix + 'support')
  .addField('invite', prefix + 'invite')
  .addField('setprefix', prefix + 'setprefix {New prefix}')
  .setColor('RANDOM')
  
  
  
  //Main Menu
  
  let menu = new Discord.RichEmbed()
  .setAuthor('HELP MENU')
  .addField(':shield: Moderation', prefix + 'help moderation')
  .addField(':smile: Fun', prefix + 'help fun')
  .addField(':zzz: Roleplay', prefix + 'help roleplay')
  .addField(':frame_photo: Picture', prefix + 'help picture')
  .addField(':question: Info', prefix + 'help info')
  //.addField(':musical_note: Music', prefix + 'help music')
  .addField(':thinking: Other', prefix + 'help other')
  .setFooter('Miss Old Help Menu? Type ' + prefix + 'oldhelp')
  .setColor('RANDOM')
  
  if(!args[0]) return message.channel.send(menu)
  
//Config args to display
  
 if(args[0] == 'moderation' || args[0] == 'Moderation') return message.channel.send(moderation)
 if(args[0] == 'support' || args[0] == 'Support') return message.channel.send(support)
 if(args[0] == 'fun' || args[0] == 'Fun') return message.channel.send(fun)
 if(args[0] == 'roleplay' || args[0] == 'Roleplay') return message.channel.send(emotinal)
 if(args[0] == 'picture' || args[0] == 'Picture') return message.channel.send(picture)
 if(args[0] == 'info' || args[0] == 'Info') return message.channel.send(info)
 //if(args[0] == 'music' || args[0] == 'Music') return message.channel.send(music)
 if(args[0] == 'other' || args[0] == 'Other') return message.channel.send(other)  
  
  
}
exports.help = {
    name: "help",
    aliases: []
}