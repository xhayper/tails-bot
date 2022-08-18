const Discord = require('discord.js');

exports.run = async(client, message, args) => {
message.channel.send("Number of Guilds: " + `**${client.guilds.size}**`);
		var list = client.guilds.array().sort();
	}

exports.help = {
    name: "guildlist",
    aliases: ['guild']
}