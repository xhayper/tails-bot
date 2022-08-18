const Discord = require("discord.js");

exports.run = async (client, message, args, prefix) => {
  return;
  /*
  function first(count) {
    if (count === undefined) return this.values().next().value;
    if (typeof count !== 'number') throw new TypeError('The count must be a number.');
    if (!Number.isInteger(count) || count < 1) throw new RangeError('The count must be an integer greater than 0.');
    count = Math.min(this.size, count);
    const arr = new Array(count);
    const iter = this.values();
    for (let i = 0; i < count; i++) arr[i] = iter.next().value;
    return arr;
  }
  
  if(!args[0]) return message.channel.send("Wrong Arguement! Use This! : serverinvite {Guild ID}");
  let guild = client.guilds.find(guild => guild.id === args[0]);
  if(!guild.available) return message.channel.send('???');
  if(!guild) return message.channel.send("Invalid Guild Id!");
  
  var channelid = [];
  channelid.push(guild.channels)
  var first = channelid.TextChannel;
  console.log(first)
  guild.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`**Permanent Invite Link**: ${invite}`);
    message.channel.send(embed);
  });
  */
}
  
exports.help = {
    name: "serverinvite",
    aliases: ['sinv']
}
