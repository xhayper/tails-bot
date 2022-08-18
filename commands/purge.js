const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  message.delete().then(() => {
  const topurge = args[0]
  const realpurge = topurge
  if(!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id != process.env.DarkSub) return message.channel.send("**:warning: Error : You don't have Manage Messages permission!**");
  if(!args[0]) return message.channel.send("**:warning: Error : Enter the specify number of messages to delete! (1-100)**");
  if(args[0] < 1 || args[0] > 100) return message.channel.send(":warning: Warnings : Please provide the range number of messages to delete (1-100)!");
  message.channel.bulkDelete(realpurge).then(()=>{
    message.channel.send(`I have pruned ${args[0]} messages!`).then(message=>message.delete(5000))
  });
})
}

exports.help = {
    name: "purge",
    aliases: ['prune']
}