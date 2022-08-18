/*
const { queue } = require("../index.js");

 exports.run = async(client, msg, args) => {
    var serverQueue = queue.get(msg.guild.id);
    
    if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
    
		if (!args[0]) return msg.channel.send(`:signal_strength: The current volume is: **${serverQueue.volume}**`);
    serverQueue.volume = args[0];
    if (args < 0 || args[0] > 100) return msg.channel.send(`Hey, ${msg.author} The volume limit is 0-100%!`);
    if (args[0] >= 0 || args[0] < 101) { serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100); 
  return msg.channel.send(`:signal_strength: I set the volume to: **${args[0]}**%`);
    }
}
 
//Back Story =>
//Send Some Help -Said Fawn (1)
//*say random thing* -said Rozi Vector (2)
//Aww Come On Help Fawn -said Roz Bot (3)
//Fine. . .-Said Rozi (4)
// 10 Minutes
//I forgot -said Rozi (5)
//-.- -Said Roz Bot (6)
//LAZY BUNNY ALERT -said Tails Bot (7)
//What A Loser -said Tails Bot (8)
//<= End Of Back Story
 */
exports.help = {
    name: "volume",
    aliases: ['vl', 'vol']
}