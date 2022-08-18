const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if(message.author.id != process.env.DarkSub) var status = 'Owner'
else var status = 'Not Owner'
const embed = new Discord.RichEmbed()
.setTitle('Owner, Checker')
.addField('Status', status)
.setColor('RANDOM')
message.channel.send(embed)
	}
exports.help = {
    name: "checkowner",
    aliases: ['co']
}