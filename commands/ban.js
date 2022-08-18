const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //let botPos = target.highestRole.calculatedPosition;
    let reason = args.slice(1).join(' ');
    
    if(!args[0]) return message.channel.send(`Mention Someone Or Give Me Their ID`);
    if(target.id == client.user.id) return message.channel.send('Seems you were trying to swing the ban hammer on me but you failed (You can\'t ban me)');
    if(target.id == process.env.DarkSub && target.id == process.env.Nakaria) return message.channel.send('You want me to swing the ban hammer to my best friends but I can\'t (I can\'t ban my friends)');
    if(!message.member.hasPermission('BAN_MEMBERS') && message.author.id != process.env.DarkSub && message.author.id != process.env.Nakaria) return message.channel.send("<:tickNo:600229699029041152> You don't have permission to ban a member!");
    if(!target) return message.channel.send("<:tickNo:600229699029041152> Please specify a valid member to ban!");
    if(!reason) return message.channel.send("<:tickNo:600229699029041152> Please specify a reason for this ban!");
    if(message.author.id === target.id) return message.channel.send("<:tickNo:600229699029041152> Trying to swing the ban hammer on you but you have shield that protected (You can't ban yourself)");
    if(target.highestRole.position >= message.member.highestRole.position && message.author.id !== process.env.DarkSub && message.author.id !== process.env.Nakaria) { return message.channel.send("<:tickNo:600229699029041152> You can't ban member with higher role than you!"); }
    if(!target.bannable && message.author.id) return message.channel.send("I can't ban this member!");

    var embedColor = 'RANDOM';
    var banEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .addField('Banned member', `${target.user.username}#${target.user.discriminator}\n-|ID: ${target.user.id}`)
        .addField('Banned by', `${message.author.username}#${message.author.discriminator}\n-|ID: ${message.author.id}`)
        .addField('Reason:', reason)
        .setTimestamp();
  
  var warningEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .addField('Banned by', message.author.tag)
        .addField('Reason:', reason)
        .setTimestamp();
  
    target.ban(reason).then(target => target.send(`Get Out! You've been banned in **${message.guild.name}**!`, warningEmbed));
    return message.channel.send(`<:Banned:602760411342962703> Hehe... User Successfully Banned!`, banEmbed);
    message.delete();
  
  if(message.author.id === process.env.DarkSub && message.author.id === process.env.Nakaria);
    {
    message.channel.send("**Bot Owner** Bypass Server's permission!");
    }

let embed = new Discord.RichEmbed()
.setColor("RED")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.IconURL)
.addField("Action:", "Ban")
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
    name: "ban",
    aliases: []
}