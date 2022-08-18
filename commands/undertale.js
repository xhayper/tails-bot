const Discord = require("discord.js");
const { Client, RichEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(message.author.id !== "154072279959994369" && message.author.id !== "398845938816516096") return message.reply("You dont have permission!");
  message.delete()
  //Config Health
const PHealth = "99";
const EHealth = "100";
  
  //End
  
  //Config Embed
  
  //Sans dialouge
    const sd1 = new RichEmbed()
  .setColor("RED")
  .setAuthor("Sans")
  .setDescription("It's a beautiful day outside.");
  
    const sd2 = new RichEmbed()
  .setColor("RED")
  .setAuthor("Sans")
  .setDescription("Birds are singing, flowers are blooming. . .");
  
      const sd3 = new RichEmbed()
  .setColor("RED")
  .setAuthor("Sans")
  .setDescription("On days like these, kids like you. . .");
  
   const sd4 = new RichEmbed()
  .setColor("RED")
  .setAuthor("Sans")
  .setDescription("Should be burning in hell.");
  
  //Da battle box
  const battlebox = new RichEmbed()
  .setColor("BLACK")
  .setAuthor("Sans\n 🔪 = Fight, 🎁 = Mercy")
  .setDescription("Sans Blocked The Way!")
  .setFooter(message.author.username + " LV 20 " + "KR " + PHealth + "/99");
  

  //Config Emoji
  let fight = client.emojis.get("550682029314932736");
  let act = client.emojis.get("550682047866208281");
  let item = client.emojis.get("550682189373636611");
  let mercy = client.emojis.get("550682212174135297");
  //End
  
  function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
for (;EHealth > '0';) {
message.delete()
var counter = '0';
message.channel.send(sd1).then((message => {
sleep(5000)
message.edit(sd2).then((message => {
sleep(5000)
message.edit(sd3).then((message => {
sleep(5000)
message.edit(sd4).then((message => {
sleep(5000)
message.edit(battlebox).then((msg => {
    if(counter == '5') return;
    if(PHealth == '0') return message.channel.send('GAME OVER')
    msg.react('🔪').then( r1 => { 
     msg.react(act).then( r2 => {
      msg.react(item).then( r3 => {
       msg.react('🎁').then( r4 => {

      sleep(2500)
      const fightFilter = (reaction, user) => reaction.emoji.name === '🔪' && user.id === message.author.id;
      const actFilter = (reaction, user) => reaction.emoji.name === act.name && user.id === message.author.id; 
      const itemFilter = (reaction, user) => reaction.emoji.name === item.name && user.id === message.author.id; 
      const mercyFilter = (reaction, user) => reaction.emoji.name === '🎁' && user.id === message.author.id; 
     
      const fight = msg.createReactionCollector(fightFilter, { time: 60000 }) 
      const act = msg.createReactionCollector(actFilter, { time: 60000 });
      const item = msg.createReactionCollector(itemFilter, { time: 60000 });
      const mercy = msg.createReactionCollector(mercyFilter, { time: 60000 }); 

      mercy.on('collect', r => {
        r.remove(client.user.id)
        r1.remove(client.user.id)
        r2.remove(client.user.id)
        r3.remove(client.user.id)
        r4.remove(message.author.id)
        battlebox.setDescription('1.SPARE\n2.FLEE')
        msg.edit(battlebox)
      });
       })
      })
     })
    })
}))
}))
}))
}))
}))
    sleep(60000)
    counter++;
}
}
exports.help = {
    name: "undertale",
    aliases: []
}