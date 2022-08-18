const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if(message.author.id != '436763513407537152') return;
var channelid = [];
if(!args[0]) return message.channel.send('Please input the guild id!')
let target = client.guilds.get(args[0]);
if(!target) return message.channel.send('Invalid Guild ID!/ I am not in that guild!')
target.channels.forEach(channels => {
channelid.push(channels.id)
}); 
target.channels.get(channelid[0]).createInvite().then(invite => 
        message.channel.send(`Here is the invite link to ${target.name}! ${invite.url}`)
);
};
exports.help = {
    name: "getinvite",
    aliases: ['ginv']
}