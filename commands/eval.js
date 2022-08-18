const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
if(message.author.id !== process.env.Nakaria) return message.channel.send("Only Nakaria can use this :V");
  message.delete()
  const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  try {
    if(!args[0]) return message.channel.send('Please Provide Me A Code :V');
       var code = args.join(" ");
    var evaled = eval(code);
    if(!args[0]) var evaled = 'None'
    
    if(code == "client.token") var evaled = "Private, You Can't Have it, Trust Me";
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
    
    
    const embed = new Discord.RichEmbed()
    .setAuthor("Eval Prompt", message.author.displayAvatarURL)
    .setColor("RANDOM")
    .addField(" **~~INPUT~~** ", `**${code}**`)
    .addField(" **~~OUTPUT~~** ", `**${evaled}**`)
      message.channel.send(embed);
      } catch (err) {
    const code = args.join(" ");
    const error = new Discord.RichEmbed()
    .setAuthor("Eval Prompt", message.author.displayAvatarURL)
    .setColor("RANDOM")
    .addField(" **~~INPUT~~** ", `**${code}**`)
    .addField(" **~~OUTPUT~~** ", `**${err}**`)
      message.channel.send(error);
  }
};
exports.help = {
    name: "eval",
    aliases: ['e']
}