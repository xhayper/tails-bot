const { queue } = require("../index.js");

exports.run = async(client, msg, args) => {
  var serverQueue = queue.get(msg.guild.id);
  
  if (!serverQueue) return msg.channel.send(':warning: There is nothing to playing.');
		return msg.channel.send(`🎶 Now Playing: **${serverQueue.songs[0].title}**`);
}

exports.help = {
    name: "np",
    aliases: ['nowplaying']
}