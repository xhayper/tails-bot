const { queue } = require("../index.js");

exports.run = async(client, msg, args) => {
    var serverQueue = queue.get(msg.guild.id);
  
    if (!msg.member.voiceChannel) return msg.channel.send(':no_good: You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send(':warning: There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end(':warning: Skip command has been used!');
    return msg.channel.send(":fast_forward: Song has been skipped");
		return undefined;
}

exports.help = {
    name: "skip",
    aliases: ['s']
}