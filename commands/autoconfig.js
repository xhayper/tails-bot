const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 10 seconds before using this command again.");
    } else {
  
    if (!message.member.hasPermission("MANAGE_CHANNELS") && message.author.id !== process.env.DarkSub) return message.channe.send("You Don't Have Permission!");
      let muterole = message.guild.roles.find(role => role.name === "Tails Bot's Muted");
      if (muterole) { 
      message.channel.send(':ok_hand: Mute Role Already Configured! ')
    } else try {
            message.channel.send('<a:Loading:604589515218092062> Configuring Mute Role')
            message.channel.send('⚠️ Warning: If your server have many channel it will take a long time to finish it')
            muterole = await message.guild.createRole({
                name: "🤬Muted🤬",
                color: "GRAY",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
      message.channel.send(':ok_hand: Mute Role Configured! Don\'t Change The Role Name! ')
        } catch (e) {
            console.log(e.stack);
        }
  message.channel.send(':ok_hand: I have configured everything for this bot!\n:warning: Do not change the role name\n:question: if it doesn\'t work it mean there was an error or i don\'t have the permission!')
              talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
  exports.help = {
    name: "autoconfig",
    aliases: ['ac']
  }