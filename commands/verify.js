const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
  
  /*let r = message.guild.roles.find(r => r.id === "-=-=✖Not Verified✖=-=-");
  let r2 = message.guild.roles.find(r => r.id === "-=-=✔Verified✔=-=-");*/
  let role = message.guild.roles.find(r => r.name === "👹Protectors of demons👹");
  
  
// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.member;

// or the person who made the command: let member = message.member;
if(message.guild.id !== '500538459446968320') return message.channel.send('Sorry mate, you can\'t use that');
if(message.channel.id !== '579456917894856725') return;
if(member.roles.find(r => r.name === "👹Protectors of demons👹")) return client.channels.get('579456917894856725').send(`You are verified already`);

  // Add the role!
//member.addRole(r2).catch(console.error);
member.addRole(role).catch(console.error);

// Remove a role!
//member.removeRole(r).catch(console.error);
member.removeRole(role).catch(console.error);
  client.channels.get('579456917894856725').send("Verifying...")
    .then((message) => {
    setTimeout(function() { 
  message.edit(`You are now verified, enjoy your day!`);
    }, 1000)
  });
}
module.exports.help = {
  name: "verify",
  aliases: []
}