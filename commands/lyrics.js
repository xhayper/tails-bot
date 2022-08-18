const Discord = require("discord.js");
var unirest = require('unirest');
module.exports.run = (client, message, args) => {
unirest.get("https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/track.search?f_has_lyrics=1&q_track=" + args.join('+') + "&page_size=1&page=1")
.end(function (result) {
  message.channel.send(result.status);
});
}

exports.help = {
    name: "lyrics",
    aliases: []
}