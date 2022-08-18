const Discord = require('discord.js')
const ms = require("ms");

exports.run = async(client, msg, args) => {
  
  msg.channel.createWebhook("Special " + client.user.username, client.user.displayAvatarURL).then(webhook => {
  msg.channel.send('<:tickYes:600229800816410654> Created A Webhook!').then(() => {
  webhook.send('Testing')
      setTimeout(function() {
  webhook.delete('AUTO DELETE AFTER 10 SECONDS')
  msg.channel.send('<:tickYes:600229800816410654> Deleted The Webhook! Reason : Auto Delete After 5 Seconds')
  }, ms('5000'))
    
});
});
}
exports.help = {
    name: "creatwebhook",
    aliases: ['cwh']
}