/*
const { queue } = require("../index.js");

const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
var serverQueue = queue.get(message.guild.id);
  
if(!message.guild.me.voiceChannel) return message.channel.send(':warning: I am not in a channel!')
if(message.guild.me.voiceChannel.id != message.member.voiceChannel.id) return message.channel.send(':warning: I am not in the same channel as you!')
else {
  if(serverQueue) {
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Leave command has been used!');
    message.guild.me.voiceChannel.leave()
    return message.channel.send("<:tickYes:315009125694177281> Leaved From " + message.guild.me.voiceChannel.name + " And Cleared The Queue!");
		return undefined;
  }
    message.guild.me.voiceChannel.leave()
    if (!serverQueue) return message.channel.send('<:tickYes:315009125694177281> Leaved from ' + message.guild.me.voiceChannel.name + '!');
}
}*/

exports.help = {
    name: "leave",
    aliases: ['left']
}