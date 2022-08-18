const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let start = Date.now(); 
  message.channel.send(':hourglass:  **Pinging...**') //loading pinging
    .then(message => { 
    let diff = (Date.now() - start).toFixed(2); //counting latency
    let API = (client.ping).toFixed(2) //API ping
        
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("PONG!")
        .addField(":signal_strength: Latency", `\`${diff} ms\``, true)
        .addField("💻 API", `\`${API} ms\``, true)
        message.delete(); //remove pinging... message
        message.channel.send(embed); //show a result
  })
  
  
}

exports.help = {
    name: "ping",
    aliases: []
}