const Discord = require('discord.js');

exports.run = async(client, message, args) => {
message.channel.send("Number of Channels: " + `**${client.channels.size}**`);
		var list = client.channels.array().sort();
    console.log(list)
		message.channel.send("Channels Names: " + `**${list}**`);
	}
exports.help = {
    name: "channellist",
    aliases: ["cl"]
}