const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');

exports.run = (client, message, args, version) => {
  
        let embed = new Discord.RichEmbed()
        .setTitle('Congratulations!, T-Series!')
        .setThumbnail('https://i.ytimg.com/vi/PHgc8Q6qTjc/default.jpg?width=80&height=60')
        .addField('T-Series', 'You did it!')
        .addField('IT\'S BIG DAY!', 'CONGRATULATIONS!! NUMBER ONE SUB CHANNEL!')
        .setColor('RANDOM')
        .setFooter('Credits To PewDiePie For The Song')
        .setURL('https://www.youtube.com/watch?v=PHgc8Q6qTjc')
      message.channel.send(`https://cdn.glitch.com/058f7fc2-ffb3-4189-8f82-d53dbd780a1d%2FCongratulations.mp4`)
      message.channel.send(embed);
  
}
exports.help = {
    name: "congrats",
    aliases: []
}