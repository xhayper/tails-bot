const Discord = require('discord.js');
const db = require('quick.db');
const math = require('mathjs')
module.exports.run = async (client, msg, args, prefix) => {

var list = [];

msg.guild.members.forEach(m => {
list.push(m.id)
})

var forembed = [];
let limit = list.length + 1
var maxpagef = list.length / 10
var maxpage = maxpagef.toFixed(1)
var page = 1
var index = 0;
var min = 0
var max = 9
if(list.length <= 9) var max = list.length - 1

for(var i = min; i <= max; i++) {
    forembed.push(list[i])
    }

console.log(forembed)

const embed = new Discord.RichEmbed() 
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${maxpage}`) 
    embed.setDescription(`Member List!\n${forembed.map(themap => `**${++index}** - ${client.users.get(themap).tag}(ID:${client.users.get(themap).id})`).join('\n')}`);
 
  msg.channel.send(embed).then(async msgn2 => { 

var index = 9

    var forembed = []
   
    msgn2.react('⏪').then(r => {
      msgn2.react('⏩')
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === msg.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === msg.author.id; 
     
      const backwards = msgn2.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msgn2.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        r.remove(msg.author.id)
        if (page === 1) return; 

        forembed = [];

        min = math.eval(min - 10)
        max = math.eval(max - 10)
        index = min

for(var i = min; i <= max; i++) {
    forembed.push(list[i])
    }

        page--; 

        embed.setDescription(`Member List!\n${forembed.map(themap => `**${++index}** - ${client.users.get(themap).tag}(ID:${client.users.get(themap).id})`).join('\n')}`);
        embed.setFooter(`Page ${page} of ${maxpage}.`); 
        msgn2.edit(embed) 
      })


     
      forwards.on('collect', r => {
          r.remove(msg.author.id)
        if (page >= maxpage) return;

        forembed = [];

        page++;

        min = math.eval(min + 10)
        max = math.eval(max + 10)
        index = min

        if(list.length <= max) max = list.length - 1

for(var i = min; i <= max; i++) {
    forembed.push(list[i])
    }

        embed.setDescription(`Member List!\n${forembed.map(themap => `**${++index}** - ${client.users.get(themap).tag}(ID:${client.users.get(themap).id})`).join('\n')}`);
        embed.setFooter(`Page ${page} of ${maxpage}.`); 
        msgn2.edit(embed) 

      })

    })

  })

}
exports.help = {
    name: "memberlist",
    aliases: ['member']
}