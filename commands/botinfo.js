const Discord = require('discord.js');
const moment = require("moment");
let os = require('os');
let nodeversion = process.version;
let discordjsversion = Discord.version;

exports.run = (client, message, args, dhm, config) => {
  let totalSeconds = (client.uptime / 1000);
  let days = ("0" + Math.floor(totalSeconds / 86400)).slice(-2);
  let hours = ("0" + Math.floor(totalSeconds / 3600)).slice(-2);
  totalSeconds %= 3600;
  let minutes = ("0" + Math.floor(totalSeconds / 60)).slice(-2);
  let seconds = ("0" + Math.floor(totalSeconds % 60)).slice(-2);
  let botShard = '0'
  
let botuptime = `${days}:${hours}:${minutes}:${seconds}`;
  let owner = client.users.get("547770004020396043");
  
    var botcreateage = moment(new Date()).diff(client.user.createdAt, 'milliseconds');
  var botage = dhm(botcreateage)
  var gjoinDiscordmilliseconds = moment(new Date()).diff(message.guild.me.joinedAt, 'milliseconds');
var gjoinago = dhm(gjoinDiscordmilliseconds);

    let botembed = new Discord.RichEmbed()
    .setAuthor("Bot Information", client.user.displayAvatarURL)
    .setColor("RANDOM")
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Client Info: ", `|-Owner: ${owner.tag}\n|-ID: ${client.user.id}\n|-Bot Name: ${client.user.username}\n|-Bot create date: ${moment.utc(client.user.createdAt).format('l ' + "HH:mm:ss")}\n|-Bot age: ${botage}\n|-Join this server: ${gjoinago} ago`)
    .addField("Count Info: ", `|-Server Count: ${client.guilds.size}\n|-User Count: ${client.users.size}\n|-Channel Count: ${client.channels.size}\n|-Shard: ${botShard}\n|-Bot Uptime: ${botuptime}`)
    .addField("Software Info: ", `|-OS: ${os.platform()}\n|-Discord.js Version: ${discordjsversion}\n|-Node Version: ${nodeversion}`)
    .addField("Version: ", `|-${config.version}`)
    .setFooter("Requested by " + message.author.tag)
    .setTimestamp(message.createdAt)
    message.delete()
    message.channel.send(botembed)
 
}
exports.help = {
    name: "botinfo",
    aliases: ['bi']
}
