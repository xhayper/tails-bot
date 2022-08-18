const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  if(!args[0]){
var user = message.author;
} else {
var yuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(yuser === null) return message.channel.send('Invalid User!')
var user = yuser.user;
}
  var dauser = message.guild.member(user)
  var per = ["ADMINISTRATOR", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS",
                "MANAGE_GUILD", "VIEW_AUDIT_LOG", "USE_EXTERNAL_EMOJIS", "MANAGE_MESSAGES", "MANAGE_NICKNAMES", 
                "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS", "CREATE_INSTANT_INVITE", "MENTION_EVERYONE"];
  const tick =
{
    true : '<:tickYes:600229800816410654>',
    false :'<:tickNo:600229699029041152>'
}

    const permlist = new Discord.RichEmbed()
    .setAuthor('Permissions List For ' + user.tag, user.displayAvatarURL)
    .setDescription(`ADMINISTRATOR: ${tick[dauser.hasPermission(per[0])]}\nKICK MEMBER: ${tick[dauser.hasPermission(per[1])]}\nBAN MEMBER: ${tick[dauser.hasPermission(per[2])]}\nMANAGE CHANNELS: ${tick[dauser.hasPermission(per[3])]}\nMANAGE SERVER: ${tick[dauser.hasPermission(per[4])]}\nVIEW AUDIT LOG: ${tick[dauser.hasPermission(per[5])]}\nUSE EXTERNAL EMOJIS: ${tick[dauser.hasPermission(per[6])]}\nMANAGE MESSAGES: ${tick[dauser.hasPermission(per[7])]}\nMANAGE NICKNAMES: ${tick[dauser.hasPermission(per[8])]}\nMUTE MEMBERS (VOICE): ${tick[dauser.hasPermission(per[9])]}\nDEFEN MEMBERS (VOICE): ${tick[dauser.hasPermission(per[10])]}\nMOVE MEMBERS (VOICE): ${tick[dauser.hasPermission(per[11])]}\nMANAGE ROLES: ${tick[dauser.hasPermission(per[12])]}\nMANAGE WEBHOOKS: ${tick[dauser.hasPermission(per[13])]}\nMANAGE EMOJIS: ${tick[dauser.hasPermission(per[14])]}\nCREATE INSTANT INVITE: ${tick[dauser.hasPermission(per[15])]}\nMENTION EVERYONE: ${tick[dauser.hasPermission(per[16])]}`)
    .setColor('RANDOM')
    .setTimestamp(message.createdAt)
    
    message.channel.send(permlist)
}
  exports.help = {
    name: "permissions",
    aliases: ['perms']
  }