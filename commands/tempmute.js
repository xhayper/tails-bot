const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args, prefix) => {

    const cuser = new Discord.RichEmbed()
  .addField(":warning: Error", "I couldn't find that user.")
  .setColor("RED")
  
  const botself = new Discord.RichEmbed()
  .addField("<:tickNo:600229699029041152> Error", "Really?, You gonna mute me?")
  .setColor("RED")
  
  const myourself = new Discord.RichEmbed()
  .addField("<:tickNo:600229699029041152> Error", "Really?, You gonna mute yourself?")
  .setColor("RED")
  
     const error1 = new Discord.RichEmbed()
  .addField("<:tickNo:600229699029041152> Error", "You don't have **Manage Message** Permission!")
  .setColor("RED")
     
          const incorrect = new Discord.RichEmbed()
  .addField(":warning:Wrong Arguement", "tempmute {Mention} {1d,1h,1m,1s} {reason}")
  .setColor("RED")

          const error2 = new Discord.RichEmbed()
  .addField(":warning: Error", "The user you are trying to mute is either the same, or higher role than you.")
  .setColor("RED")

  const specifytime = new Discord.RichEmbed()
  .addField(":warning: Error", "You didn't specify a time!")
  .setColor("RED")
  
    const error3 = new Discord.RichEmbed()
  .addField(":warning: Error", "My role position is lower or equal to that person!")
  .setColor("RED")
    
  if(!args[2]) return message.channel.send(incorrect);
  var reason = args.slice(2).join(' ');
  if(!reason) var reason = 'None';
    if (!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== "436763513407537152" && message.author.id !== "574062963397492796") return message.channel.send(error1);
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.channel.send(cuser);
    if (tomute.highestRole.position >= message.member.highestRole.position && message.author.id !== '436763513407537152' && message.author.id !== '574062963397492796') return message.channel.send(error2);
    if (tomute.highestRole.position >= message.guild.me.highestRole.position) return message.channel.send(error3);
    let muterole = message.guild.roles.find(role => role.name === "🤬Muted🤬");
  
  if(!muterole) {
   try {
            muterole = await message.guild.createRole({
                name: "🤬Muted🤬",
                color: "DARK_GRAY",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log('Error : ' + e);
        } 
  }

  const unmuted = new Discord.RichEmbed()
  .addField("Alert", `<@${tomute.id}> has been unmuted!`)
  .setColor("BLUE")

    let mutetime = args[1];
    if (!mutetime) return message.channel.send(specifytime);

  const success = new Discord.RichEmbed()
  .addField("<:tickYes:600229800816410654> Success!", `<@${tomute.id}> has been muted!`)
  .addField("Time", `${ms(ms(mutetime))}`)
  .addField('Reason', reason)
  .setColor("GREEN")

    await (tomute.addRole(muterole.id));
    message.channel.send(success);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(unmuted);
    }, ms(mutetime));

}
exports.help = {
    name: "tempmute",
    aliases: ['tm']
}