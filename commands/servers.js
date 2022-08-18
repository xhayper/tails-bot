const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  if(message.author.id != process.env.DarkSub && message.author.id != process.env.Nakaria && message.author.id != process.env.Rozi) return;
  message.delete()
    let bicon = bot.user.displayAvatarURL;
    var string = [];
    var stringss = 1;
   let kosbotbt = bot.user.username;
    bot.guilds.forEach( guild => {
      
      if(guild.id == '') return;
    if(guild.owner.user.tag === undefined) var owner = 'Unknown'
    else var owner = guild.owner.user.tag
    
    if(guild.owner.user.id === undefined) var ownerid = 'Unknown'
    else var ownerid = guild.owner.user.id
    
    string.push(`\`\`\`diff\n-Guild Name : ${guild.name}\n\n-Guild ID : ${guild.id}\n\n-Member Count : ${guild.memberCount}\n\n-Owner : ${owner}\n\n-Owner ID : ${ownerid}\`\`\``);
    })
  
    let botembed = new Discord.RichEmbed()
    .setAuthor('Guilds List Menu')
    .setFooter(`Page ${stringss} of ${string.length}`) 
    .setDescription(string[stringss-1])
    .setColor('RANDOM')
    message.channel.send(botembed).then(msg => {
   
    msg.react('⏪').then( r => { 
     msg.react('❌').then( r => {
      msg.react('⏩')

     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id; 
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 200000 }) 
      const cancel = msg.createReactionCollector(cancelFilter, { time: 200000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 200000 }); 
     
      
      backwards.on('collect', r => { 
        r.remove(message.author.id)
        if (stringss === 1) return; 
        stringss--;
        botembed.setDescription(string[stringss-1]); 
        botembed.setFooter(`Page ${stringss} of ${string.length}`);
        botembed.setColor('RANDOM')
        msg.edit(botembed) 
      })
     
      forwards.on('collect', r => { 
        r.remove(message.author.id)
        if (stringss === string.length) return;
        stringss++;
        botembed.setDescription(string[stringss-1]); 
        botembed.setFooter(`Page ${stringss} of ${string.length}`); 
        botembed.setColor('RANDOM')
        msg.edit(botembed)
      })
      cancel.on('collect', r => {
        msg.delete()
        msg.channel.send('Cancelled').then((msg => {
        msg.delete(12000)
        return;
       }))
      })
    })
  })
})
}

exports.help = {
    name: "servers",
    aliases: []
}