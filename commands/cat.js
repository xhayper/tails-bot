const superagent = require("snekfetch");
const Discord = require('discord.js');
const querystring = require('querystring');
const r2 = require("r2");
const API_URL   = "https://api.thecatapi.com/"

exports.run = async (client, message, args, prefix) => {
  
  async function loadImage(sub_id)
{
  
  var headers = {
      'X-API-KEY': process.env.THECATAPI,
  }
  var query_params = {
    'has_breeds':true,
    'mime_types':'jpg,png,gif',
    'size':'small',
    'sub_id': sub_id,
    'limit' : 1
  }

  try {
    let _url = API_URL + `v1/images/search`;
    var response = await r2.get(_url , {headers} ).json
  } catch (e) {
      console.log(e)
  }
  return response;

}
  
   var images = await loadImage(message.author.username);
   var image = images[0];
   var breed = image.breeds[0];
  
      const cat = new Discord.RichEmbed()
      .setAuthor('🐱 Here is some cat images!')
      .setImage(image.url)
      .setFooter('Requested By ' + message.author.tag)
      .setTimestamp(message.createdAt)
      .setColor(`RANDOM`)
  message.channel.send(cat);
  
  
}
exports.help = {
    name: "cat",
    aliases: []
}