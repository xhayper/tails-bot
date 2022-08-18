const Dicord = require('discord.js');
exports.run = async(client, msg, args) => {
  
  if(msg.author.id != '436763513407537152' && msg.author.id != '574062963397492796') return msg.channel.send('Bot Owner Only :V');
  
  msg.channel.send('Restarting Bot. . .').then(() => {
    client.destroy()
  })
  
}
exports.help = {
    name: "restart",
    aliases: ['reset']
}