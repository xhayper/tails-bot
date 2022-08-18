const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args,) => {
  
  if(!message.member.hasPermission("BAN_MEMBERS") && !message.member.hasPermission("ADMINISTRATOR") && message.author.id !== process.env.DarkSub) return message.channel.send("<:tickNo:600229699029041152> You don't have permission to use this command!") 
  
  let search = args[0]
  if(!search) return message.channel.send(":warning: Please specify an ID/user#tag user to unban!")
  let bans = await message.guild.fetchBans()
  let bannedMember = bans.get(search) || bans.find(u => u.tag.toLowerCase().includes(search.toLowerCase()))
    if(!bannedMember) return message.channel.send(":warning: I cannot find that user!")
  let reason = args.slice(1).join("")
  if(!reason) return message.channel.send(":warning: Please input a reason!")
  
if(!message.guild.me.hasPermission("BAN_MEMBERS") && !message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNo:600229699029041152> I don't have permission to perform this action!")
message.delete()
try {
  message.guild.unban(bannedMember, {reason: reason})
  message.channel.send(`<:Unbanned:602760826658750494> ${bannedMember.tag} has been unbanned for this server`)
} catch(e) {
  console.log(e.message)
}

let embed = new Discord.RichEmbed()
.setColor("RED")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.IconURL)
.addField("Action:", "Unban")
.addField("Moderated on:", `${bannedMember.username} (${bannedMember.id}`)
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
    name: "unban",
    aliases: ['']
}