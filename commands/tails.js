const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let random_tails_img = ["https://cdn.discordapp.com/attachments/545093079133192212/545094520770134047/3.jpg", "https://cdn.discordapp.com/attachments/545093079133192212/545094522737000459/4.jpg", "https://cdn.discordapp.com/attachments/545093079133192212/545094523311620117/5.jpg", "https://cdn.discordapp.com/attachments/545093079133192212/545094524574236682/6.jpg", "https://cdn.discordapp.com/attachments/545093079133192212/545094525945774105/7.jpg", "https://cdn.discordapp.com/attachments/545093079133192212/545103296541753344/10.png", "https://cdn.discordapp.com/attachments/545093079133192212/545103300597645333/9.jpg", 
                            "https://cdn.discordapp.com/attachments/545093079133192212/545103302761644042/8.jpg", "https://cdn.discordapp.com/attachments/545093079133192212/608972533651210248/images_1.jpeg", "https://cdn.discordapp.com/attachments/545093079133192212/608972533651210251/images.jpeg", "https://cdn.discordapp.com/attachments/545093079133192212/608972534251257889/images_2.png", "https://cdn.discordapp.com/attachments/545093079133192212/608972534834135051/d56fgfm-35eeb951-1052-46cd-ba8d-d985baf47bfe.jpg", "https://cdn.discordapp.com/attachments/545093079133192212/608972535509286941/8661094a74742dbb51ca820d71003cb9.jpg", "https://cdn.discordapp.com/attachments/545093079133192212/608972535509286943/large.jpg", "https://cdn.discordapp.com/attachments/545093079133192212/608972536251940864/8979d8f1dc93e4c171e5995f5f47523b--something-new-backgrounds.jpg", "https://cdn.discordapp.com/attachments/545093079133192212/608972536251940866/d86ddaq-86be29d8-9d97-4255-9f94-88bdd5da0491.png", "https://cdn.discordapp.com/attachments/545093079133192212/608973042609029161/Screen_Shot_2018-01-31_at_3.16.26_PM.jpg"]
    let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Here's Tails Image You Requested <:Tails_Normal:594485000531869743>`)
  .setImage(random_tails_img[Math.floor(Math.random() * random_tails_img.length)])
  .setFooter("Requested by " + message.author.tag);
  message.channel.send(embed);
}

exports.help = {
    name: "tails",
    aliases: []
}