const db = require('quick.db');
const moment = require('moment');
const Discord = require('discord.js');


module.exports = async (client, member) => {
  
    const guild = member.guild
var logstatus = await db.fetch(`logs_${guild.id}_stat`);
let logschannel = await db.fetch(`logs_${guild.id}_channel`);

  if(logstatus === null) var logstatus = 'off'
  else var logstatus = logstatus
  
  if(logstatus != 'on') return;
  
      function dhm(ms){
    var days = Math.floor(ms / (24*60*60*1000));
    var daysms=ms % (24*60*60*1000);
    var hours = Math.floor((daysms)/(60*60*1000));
    var hoursms=ms % (60*60*1000);
    var minutes = Math.floor((hoursms)/(60*1000));
    var minutesms=ms % (60*1000);
    var sec = Math.floor((minutesms)/(1000));
    
     if(sec == '0') {
    var secva = '';
    var secend = '';
  }
    if(minutes == '0') {
    var minutesva = '';
    var minutesend = '';
  }
    if(hours == '0') {
    var hoursva = '';
    var hoursend = '';
  }
  
    if(sec == '1') {
    var secva = '1';
    var secend = ' second ';
  }
    if(minutes == '1') {
    var minutesva = '1';
    var minutesend = ' minute, ';
  }
    if(hours == '1') {
    var hoursva = '1';
    var hoursend = ' hour, ';
  }
  
      if(sec > '1') {
    var secva = sec;
    var secend = ' seconds ';
  }
    if(minutes > '1') {
    var minutesva = minutes;
    var minutesend = ' minutes, ';
  }
    if(hours > '1') {
    var hoursva = hours;
    var hoursend = ' hours, ';
  }
    
    return days+" days, "+hoursva+hoursend+minutesva+minutesend+secva+secend;
}
 
 var joinDiscordmilliseconds = moment(new Date()).diff(member.user.createdAt, 'milliseconds');
  var joinago = dhm(joinDiscordmilliseconds);
  
  var currentDate = new Date();
  const newmember = new Discord.RichEmbed()
  .setAuthor('A new member has joined!')
  .addField('User', member)
  .addField('User ID', member.user.id)
  .addField('Account Age', joinago)
  .setColor('RANDOM')
  .setTimestamp(currentDate);
  let rChannel = guild.channels.find(channel => channel.id === logschannel);
  rChannel.send(newmember).then(() => {
  })
  
}