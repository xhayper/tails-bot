const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
const listedChannels = []; 
message.guild.channels.forEach(channel => { 
    if(channel.permissionsFor(message.author).has('VIEW_CHANNEL')) listedChannels.push(channel.name);
});
message.channel.send(`You have access to: /n${listedChannels.join(', /n')}`);
}
exports.help = {
    name: "testestest",
    aliases: []
}