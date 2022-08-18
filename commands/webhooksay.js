const Discord = require('discord.js')

exports.run = async(client, msg, args) => {
  msg.channel.createWebhook("Special " + client.user.username, client.user.displayAvatarURL).then(hook => {
 let plssay = args.join(' ');
 if (!plssay) return hook.send("**You want me to *say* but there was no text?**") && hook.delete();
  //
  const content = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(plssay)
  //
 msg.delete();
 hook.send(plssay).then(() => {
hook.delete()
 })
})
}

exports.help = {
    name: "webhooksay",
    aliases: ['whs']
}