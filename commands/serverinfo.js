const Discord = require("discord.js");
const moment = require("moment");
const math = require('mathjs')

exports.run = async(client, message, args, dhm) => {
  
  if(!args[0]) var tguild = message.guild
  else if(!isNaN(args[0])) var tguild = client.guilds.find(guild => guild.id === args[0])
  else var tguild = message.guild

  const servico =
{
    'singapore' : ':flag_sg: Singapore',
    'brazil' : ':flag_br: Brazil',
    'eu-central' : ':flag_eu: Central Europe',
    'hongkong' : ':flag_hk: Hong Kong',
    'japan' : ':flag_jp: Japan',
    'russia' : ':flag_ru: Russia',
    'southafrica' : ':flag_za: South Africa',
    'sydney' : ':flag_au: Sydney, Australia',
    'us-central' : ':flag_us: US Central',
    'us-east' : ':flag_us: US East',
    'us-south' : ':flag_us: US South',
    'us-west' : ':flag_us: US West',
    'eu-west' : ':flag_eu: Western Europe',
    'india' : ':flag_in: India'
}
  
  const vercon =
        {
          '0' : 'None',
          '1' : 'Low',
          '2' : 'Medium',
          '3' : 'High',
          '4' : 'Very High'
        }
  
  console.log(tguild.channels.map(x => x.name).join('\n'))
  
  var serverages = moment(new Date()).diff(tguild.createdAt, 'milliseconds');
  var serverage = dhm(serverages);
  let serverembed = new Discord.RichEmbed()
  .setTitle("Server Information")
  .setColor("RANDOM")
  .setThumbnail(tguild.iconURL)
  .addField('Name:', `${tguild.name}`, true)
  .addField('Server Owner:', tguild.owner.user.tag, true)
  .addField("Server Create Date:", moment.utc(tguild.createdAt).format("LLL"), true)
  .addField("Server Age:", serverage, true)
  .addField('Server Region:', servico[tguild.region], true)
  .addField("Member Count:", tguild.memberCount, true)
  .addField('Roles:', tguild.roles.size)
  .addField('Emojis:', tguild.emojis.size)
  .addField('Verification Level:', vercon[tguild.verificationLevel])
  .addField("Guild ID", tguild.id, true)
  .setFooter("Requested by " + message.author.tag)
  message.channel.send(serverembed);

}
exports.help = {
    name: "serverinfo",
    aliases: ['si']
}