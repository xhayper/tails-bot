const Discord = require('discord.js');

exports.run = (client, message, args) => {

  if(message.author.id !== "436763513407537152") return message.channel.send("Bot owner Only");
  
if(!args[0]) return message.channel.send("Wrong Argument");
  
var channelid = [];
if(!args[0]) return message.channel.send('Please input the guild id!')
let target = client.guilds.get(args[0]);
if(!target) return message.channel.send('Invalid Guild ID!')
target.channels.forEach(channels => {
channelid.push(channels.id)
});
  
let thechannel = client.channels.get(channelid[0]);

message.channel.send("Message?").then(() => {

const filter = m => m.content.includes('');
const collector = message.channel.createMessageCollector(filter, { max: 1, time: 20000 });

collector.on('collect', m => {
  client.channels.get(channelid[0]).send(m.content)
  message.channel.send(' Done! I sent ' + `"**${m.content}**"` + " In " + thechannel.name + "!") 
});
})
}
exports.help = {
    name: "reply",
    aliases: []
}