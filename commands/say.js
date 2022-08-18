exports.run = async(client, msg, args) => {
 let plssay = args.join(' ');
 if (!plssay) return msg.channel.send("**You want me to say but there was no text?**");
 msg.delete();
 msg.channel.send(plssay)
}

exports.help = {
    name: "say",
    aliases: []
}