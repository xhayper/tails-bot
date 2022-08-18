const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });
const config = require("./config.json");
const moment = require("moment");
const fs = require("fs");
const { Util } = require("discord.js");
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(process.env.YOUTUBE);
const db = require("quick.db");
const queue = new Map();
const glob = require("glob");
const DBL = require("dblapi.js");
let guildconfig = JSON.parse(fs.readFileSync("./guildsconfig.json", "utf8"));

const { promisify } = require("util");

const readdir = promisify(require("fs").readdir);

// this webhook is dead LOL, it was created 4 years ago
/*const counthook2 = new Discord.WebhookClient("568008366522368001", "Nk6HGoVEo15h48AFjzayntd95sIpMh7Z7vBoC8lOknqeIX2hR-ymjqcQiSdA8CIkHFr2");
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

      var interval = setInterval(function () {
        var limit = Infinity
        var count = db.fetch('counteiei')
        if(count === null) var count = 0
        const embed = new Discord.RichEmbed()
        .setAuthor('Counter')
        .addField('Current Number :', numberWithCommas(count), true)
        .addField('Limit : ', numberWithCommas(limit), true)
        .addField('Hit the limit :', count >= limit ? 'Yes' : 'No', true)
        .setColor('RANDOM')
        .setTimestamp(Date.now())
       // counthook2.send(embed)
        if(count >= limit) return;
        db.add('counteiei', 1)
          
      }, 2500);*/

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
glob("./commands/**/*", (err, files) => {
  if (err) console.log(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(file);

    let commandName = file.replace("./commands/", "").replace(".js", "");
    client.commands.set(commandName.toLowerCase(), props);
  });
});

function dhm(ms) {
  var days = Math.floor(ms / (24 * 60 * 60 * 1000));
  var daysms = ms % (24 * 60 * 60 * 1000);
  var hours = Math.floor(daysms / (60 * 60 * 1000));
  var hoursms = ms % (60 * 60 * 1000);
  var minutes = Math.floor(hoursms / (60 * 1000));
  var minutesms = ms % (60 * 1000);
  var sec = Math.floor(minutesms / 1000);

  if (sec == "0" || sec == NaN) {
    var secva = "";
    var secend = "";
  }
  if (minutes == "0" || minutes == NaN) {
    var minutesva = "";
    var minutesend = "";
  }
  if (hours == "0" || hours == NaN) {
    var hoursva = "";
    var hoursend = "";
  }
  if (days == "0" || days == NaN) {
    var daysva = "";
    var daysend = "";
  }

  if (sec == "1") {
    var secva = "1";
    var secend = " Second ";
  }
  if (minutes == "1") {
    var minutesva = "1";
    var minutesend = " Minute, ";
  }
  if (hours == "1") {
    var hoursva = "1";
    var hoursend = " Hour, ";
  }
  if (days === "1") {
    var daysva = "1";
    var daysend = " Day, ";
  }

  if (sec > "1") {
    var secva = sec;
    var secend = " Seconds ";
  }
  if (minutes > "1") {
    var minutesva = minutes;
    var minutesend = " Minutes, ";
  }
  if (hours > "1") {
    var hoursva = hours;
    var hoursend = " Hours, ";
  }
  if (days > "1") {
    var daysva = days;
    var daysend = " Days, ";
  }

  return (
    daysva +
    daysend +
    hoursva +
    hoursend +
    minutesva +
    minutesend +
    secva +
    secend
  );
}

/*
client.on("message", msg => {
  if(!gcallowed[msg.guild.id]) return;
  if(msg.channel.nsfw) return;
  if(msg.author.bot) return;
  var args = msg.content.slice('').trim().split(' ');
  const messages = new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.displayAvatarURL)
  .setDescription(args.join(' '))
  .setFooter("From The Server That Named : " + msg.guild.name, msg.guild.iconURL)
  .setColor('RANDOM')
  .setTimestamp(msg.createdAt)
  client.channels.get('556094061090439199').send(messages)
  client.channels.get('557536262035210243').send(messages)
});
*/

client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let guildconfig = JSON.parse(fs.readFileSync("./guildsconfig.json", "utf8"));
  if (!guildconfig[msg.guild.id]) {
    guildconfig[msg.guild.id] = {
      logs: "off",
      logschannel: "none"
    };
  }

  // Start of code Prefix Json
  /*
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[msg.guild.id]){
     prefixes[msg.guild.id] = {
      prefix: config.prefix
     }
  }
  */
  // End of code Prefix Json

  const prefixMention = new RegExp(`^<@!?${client.user.id}>`);

  // Start Of Quick.DB
  // Get Prefix
  var prefix = await db.fetch(`prefix_${msg.guild.id}`);
  if (prefix === null) var prefix = "T!";

  // End Of Quick.DB

  // Start of code Mention Bot
  if (msg == `<@${client.user.id}>` || msg == `<@!${client.user.id}>`) {
    let tagEmbed = new Discord.RichEmbed()
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("RANDOM")
      .setTitle(`${client.user.username} Prefix`)
      .setDescription(
        `Global Prefix =  (**T!**) \nPrefix In This Server =  (**${prefix}**)`
      ) //prefixes[msg.guild.id].prefix}help
      .setFooter(`To view help commands, type ${prefix}help`); //prefixes[msg.guild.id].prefix}help
    msg.channel.send(tagEmbed);
  }
  // End of code Mention Bot

  if (!msg.content.startsWith(config.prefix)) return;
  var messageArray = msg.content.split(" ");
  var args = msg.content
    .slice(config.prefix.length)
    .trim()
    .split(" ");
  var searchString = messageArray.slice(1).join(" ");
  var url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  console.log(searchString);
  var serverQueue = queue.get(msg.guild.id);
  var sender = msg.author;
  var cmd = args[0].toLowerCase();

  let commandfile =
    client.commands.get(cmd) ||
    client.commands.find(c => c.help.aliases && c.help.aliases.includes(cmd));
  commandfile.run(client, msg, args, prefix, config, dhm);
  {
    console.log(
      `${msg.author.tag} has been using ${cmd}'s command in ${msg.guild.name} in ${msg.channel.name}`
    ); //you can monitoring who used the command trough console log
  }
});

/*
client.on('message', msg => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const prefix = msg.content.match(prefixMention) ? msg.content.match(prefixMention)[0] : 'T!';
if(!msg.content.startsWith(prefix)) return;
  var messageArray = msg.content.split(" ");
  var args = msg.content.slice(prefix.length).trim().split(' ');
  var searchString = messageArray.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  console.log(searchString);
  var serverQueue = queue.get(msg.guild.id);
  var sender = msg.author;
  var cmd = args.shift().toLowerCase();
  
  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, msg, args);
    
  } catch (e) {
    console.log(e.stack);
  } finally {
    console.log(`${msg.author.tag} has using ${cmd}'s command`);
  }
});
*/

require("./server.js"); //The life of 24/7 bot

/*client.on("guildMemberAdd", member => {
  const r = member.guild.roles.find(r => r.name === "-=-=✖Not Verified✖=-=-"); //Dark Subconscious Team
  member.addRole(r).catch(console.error);
  const r2 = member.guild.roles.find(r => r.name === "unverified"); //EXE Soldier
  //member.addRole(r2).catch(console.error)
  let welcome = new Discord.RichEmbed()
    .setAuthor("Welcome")
    .setDescription(
      `Hello there ${member.user.tag}, welcome to ${member.guild.name}`
    )
    .setFooter(`This server now have ${member.guild.memberCount} members`)
    .setThumbnail(member.user.avatarURL)
    .setTimestamp()
    .setColor("RANDOM");
  if (member.guild.id === "500538459446968320") {
    client.channels.get("510832820189659136").send(welcome);
  }
  console.log(
    `An user joined\nName: ${member.user.username}\nTag: ${member.user.discriminator}`
  );
});
client.on("guildMemberRemove", member => {
  let goodbye = new Discord.RichEmbed()
    .setAuthor("Goodbye")
    .setDescription(`Goodbye ${member.user.tag}, hope you comeback soon`)
    .setFooter(`This server now have ${member.guild.memberCount} members`)
    .setThumbnail(member.user.avatarURL)
    .setTimestamp()
    .setColor("RANDOM");
  if (member.guild.id === "500538459446968320") {
    client.channels.get("535541669798346768").send(goodbye);
  }
  console.log(
    `An user leaved\nName: ${member.user.username}\nTag: ${member.user.discriminator}`
  );
});*/
/*client.on("message", message => {
  if (message.author.bot) return;
  if (message.guild.id === "505772976285941771" && message.content == "oof") {
    message.channel.send("Oofie <:OOF:602235327649677312>");
  }
  if (message.guild.id === "505772976285941771" && message.content == "oofie") {
    message.channel.send("Oofie <:OOF:602235327649677312>");
  }
  if (message.guild.id === "505772976285941771" && message.content == "kek") {
    message.channel.send("<:Smirk:602235432985559042>");
  }
  if (message.guild.id === "505772976285941771" && message.content == "b") {
    client.channels.get("505776218357104680").send("Rush 🅱️");
  }
  if (message.guild.id === "500538459446968320" && message.content == "b") {
    client.channels.get("528309032117731338").send("Rush 🅱️");
  }
  if (message.guild.id === "500538459446968320" && message.content == "oof") {
    message.channel.send("Oofie <:OOF:602235327649677312>");
  }
  if (message.guild.id === "505772976285941771" && message.content == "e") {
    message.channel.send("<a:ThanosFU:601505936187850782>");
  }
});*/

client.on("guildCreate", guild => {
  let joined = new Discord.RichEmbed()
    .setAuthor(guild.icon)
    .setDescription(`New guild joined!`)
    .setThumbnail(guild.icon)
    .addField("Guild Name: ", `${guild.name}`)
    .addField("Guild Owner: ", `${guild.owner}`)
    .addField("Guild ID: ", `${guild.id}`)
    .addField("Member Count: ", `${guild.memberCount}`)
    .setColor("RANDOM")
    .setFooter(`Currently in: ${client.guilds.size} servers`)
    .setTimestamp();
  client.channels.get("600232039450411008").send(joined);
  // This event triggers when the bot joins a guild.
  console.log(
    `New guild: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  );
});

client.on("guildDelete", guild => {
  db.delete(`prefix_${guild.id}`);
  db.delete(`logs_${guild.id}_channel`);
  db.delete(`logs_${guild.id}_stat`);
  db.delete(`${guild.id}_ignorelogs`);
  let leaved = new Discord.RichEmbed()
    .setAuthor(guild.icon)
    .setDescription(`An guild removed`)
    .setThumbnail(guild.icon)
    .addField("Guild Name: ", `${guild.name}`)
    .addField("Guild ID: ", `${guild.id}`)
    .setColor("RANDOM")
    .setFooter(`Currently in ${client.guilds.size} servers`)
    .setTimestamp();
  client.channels.get("600232039450411008").send(leaved);
  console.log(`I got removed from: ${guild.name} (ID: ${guild.id})`);
});

// Extract the required classes from the discord.js module
const { Client, RichEmbed } = require("discord.js");
//Import Commands,Use commando
// bot.registry.registerGroup('moderative', 'Moderative');
// bot.registry.registerDefaults();
// bot.registry.registerCommandsIn(__dirname + "/commands");

//Bot online Stuffs
client.on("ready", () => {
  client.on("error", console.error);
  client.user.setStatus("online"); // Can be 'online', 'idle', 'dnd', or 'invisible'
  setInterval(changing_status, 12000);
  console.info(`Logged in as ${client.user.tag}.`);
});

//Set Status
function changing_status() {
  let statdetail = [` | ${config.prefix}help | ` + config.version];
  let status = [
    `Tails Bot` + statdetail,
    `with ${client.users.size.toLocaleString()} users` + statdetail,
    `on ${client.guilds.size.toLocaleString()} servers` + statdetail,
    `on ${client.channels.size.toLocaleString()} channels` + statdetail,
    `24/7 Supported!` + statdetail
  ];
  let random = status[Math.floor(Math.random() * status.length)];
  client.user.setActivity(random, {
    type: "STREAMING",
    url: "https://www.twitch.tv/seriesspanker"
  });
}
/*
          
client.on('message', message => {
  if(message.channel.type == "dm") return;
     if(message.author.bot) return;
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    let prefix = prefixes[message.guild.id].prefix;
  
          if (message == `<@${client.user.id}>` || message == `<@!${client.user.id}>` || message == `<@!${client.user.id}> help` || message == `<@${client.user.id}> help`) {
    let tagEmbed = new Discord.RichEmbed()
    .setThumbnail(client.user.displayAvatarURL) // ok!
    .setColor('RANDOM')
    .setTitle(`${client.user.username} Prefix`)
    .setDescription(`Global Prefix =  (**T!**) \nPrefix In This Server =  (**${prefix}**)`)
    .setFooter(`To view help commands, type ${prefix}help`)
    message.channel.send(tagEmbed);
}
});
*/

// Music Command
// ============================================================================================================================================
/*exports.handleVideo = handleVideo;
exports.queue = queue;

async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
    uploaded: video.channel.title,
    authors: message.author,
    create: (video.publishedAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    voicechan: message.member.voiceChannel.name,
    durationmm: video.durationSeconds ? video.durationSeconds : video.duration / 1000,
    channel: `https://www.youtube.com/channel/${video.channel.id}`,
		url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    duration: video.duration
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
      member: message.author,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 50,
			playing: true,
    loop: false,
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`:no_good: I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
    
    var addedembed = new RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`Added Queue:`, 'https://cdn.discordapp.com/attachments/535027866459701268/535279847065518092/Music-icon.png')
    .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
    .setDescription(`**[${song.title}](${song.url})**`)
    .addField(":clock3: Duration:", `${require('./util.js').timeString(song.durationmm)}`, true)
    .addField(':man_in_tuxedo: Uploaded by:', `**[${song.uploaded}](${song.channel})**`, true)
    .addField(':loud_sound: Voice Channel:', song.voicechan, true)
    .addField(':arrow_forward: Requested By:', song.authors.tag, true)
    .addField(':calendar_spiral: Uploaded At:', song.create, true)
    .addField(':signal_strength: Current Volume:', `${serverQueue.volume}%`, true)
    .setTimestamp();
    
		return message.channel.send(addedembed);
	}
	return undefined;
}

function play(guild, song, message) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
}
	console.log(serverQueue.songs);

    // option: quality: 'highestaudio'
	 const dispatcher = serverQueue.connection.playStream(ytdl(song.url, { filter: 'audioonly', highWaterMark: 1<<25, }))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
      const shifed = serverQueue.songs.shift();
      if(serverQueue.loop) serverQueue.songs.push(shifed);
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
  
  var playembed = new RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`Start Playing:`, 'https://cdn.discordapp.com/attachments/535027866459701268/535279847065518092/Music-icon.png')
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .setDescription(`**[${song.title}](${song.url})**`)
  .addField(":clock3: Duration:", `${require('./util.js').timeString(song.durationmm)}`, true)
  .addField(':man_in_tuxedo: Uploaded by:', `**[${song.uploaded}](${song.channel})**`, true)
  .addField(':loud_sound: Voice Channel:', song.voicechan, true)
  .addField(':arrow_forward: Requested By:', song.authors.tag, true)
  .addField(':calendar_spiral: Uploaded At:', song.create, true)
  .addField(':signal_strength: Current Volume:', `${serverQueue.volume}%`, true)
  .setTimestamp();
  
	serverQueue.textChannel.send(playembed);
}*/
// ============================================================================================================================================

// Logger

const init = async () => {
  const evtFiles = await readdir("./events/");
  console.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    // Bind the client to any event, before the existing arguments
    // provided by the discord.js event.
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
  });
};

init();

try {
  client.on("guildBanRemove", async function(guild, user) {
    var logstatus = await db.fetch(`logs_${guild.id}_stat`);
    let logschannel = await db.fetch(`logs_${guild.id}_channel`);

    if (logstatus != "on") return;
    var currentDate = new Date();
    const unbanned = new Discord.RichEmbed()
      .setAuthor("Member Unbanned")
      .addField("Name", user.username)
      .addField("ID", user.id)
      .setColor("RANDOM")
      .setTimestamp(currentDate);
    let rChannel = guild.channels.find(channel => channel.id === logschannel);
    rChannel.send(unbanned).then(() => {});
  });

  client.on("messageUpdate", async function(oldMessage, newMessage) {
    if (newMessage.author.bot) return;
    let guild = newMessage.guild;
    var logstatus = await db.fetch(`logs_${guild.id}_stat`);
    let logschannel = await db.fetch(`logs_${guild.id}_channel`);

    if (logstatus === null) var logstatus = "off";
    else var logstatus = logstatus;

    if (logstatus != "on") return;
    if (oldMessage.cleanContent == newMessage.cleanContent) return;
    if (newMessage.author.bot) return;
    if (oldMessage == newMessage) return;
    var currentDate = new Date();
    const newmessage = new Discord.RichEmbed()
      .addField("Author", newMessage.author)
      .addField("Channel", newMessage.channel)
      .addField("Message ID (Just in case)", newMessage.id)
      .setColor("RANDOM")
      .setThumbnail(newMessage.author.displayAvatarURL)
      .setTimestamp(currentDate);

    if (oldMessage.cleanContent != newMessage.cleanContent) {
      newmessage.setAuthor("A message has been edited!");
      newmessage.addField("Old Text", oldMessage.cleanContent);
      newmessage.addField("New Text", newMessage.cleanContent);
    }

    let rChannel = guild.channels.find(channel => channel.id === logschannel);
    rChannel.send(newmessage).then(() => {});
  });

  client.on("channelCreate", async function(channel) {
    const guild = channel.guild;
    var logstatus = await db.fetch(`logs_${guild.id}_stat`);
    let logschannel = await db.fetch(`logs_${guild.id}_channel`);

    if (logstatus === null) var logstatus = "off";
    else var logstatus = logstatus;

    if (logstatus != "on") return;
    var currentDate = new Date();
    const newchannel = new Discord.RichEmbed()
      .setAuthor("A new channel has been created!")
      .addField("Name", channel.name)
      .addField("ID", channel.id)
      .setColor("RANDOM")
      .setTimestamp(currentDate);
    let rChannel = guild.channels.find(channel => channel.id === logschannel);
    rChannel.send(newchannel).then(() => {});
  });

  client.on("channelDelete", async function(channel) {
    const guild = channel.guild;
    var logstatus = await db.fetch(`logs_${guild.id}_stat`);
    let logschannel = await db.fetch(`logs_${guild.id}_channel`);

    if (logstatus === null) var logstatus = "off";
    else var logstatus = logstatus;

    if (logstatus != "on") return;
    var currentDate = new Date();
    const newchannel = new Discord.RichEmbed()
      .setAuthor("A Channel has been deleted!")
      .addField("Name", channel.name)
      .addField("ID", channel.id)
      .setColor("RANDOM")
      .setTimestamp(currentDate);
    let rChannel = guild.channels.find(channel => channel.id === logschannel);
    rChannel.send(newchannel).then(() => {});
  });

  /*
client.on("userUpdate", function(oldUser, newUser){
    const guild = newUser.guild
    if(!guildconfig[guild.id]){
     guildconfig[guild.id] = {
      logs: 'off',
      logschannel: 'none'
     }
  }
  if(guildconfig[guild.id].logs != 'on') return;
  var currentDate = new Date();
  
});
*/

  client.on("guildMemberUpdate", async function(oldMember, newMember) {
    const guild = newMember.guild;
    var logstatus = await db.fetch(`logs_${guild.id}_stat`);
    let logschannel = await db.fetch(`logs_${guild.id}_channel`);

    if (logstatus === null) var logstatus = "off";
    else var logstatus = logstatus;

    if (logstatus != "on") return;
    var currentDate = new Date();
    const changes = new Discord.RichEmbed()
      .setAuthor("A change has been maded!")
      .addField("User", newMember)
      .addField("ID", newMember.id)
      .setThumbnail(newMember.user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp(currentDate);
    if (oldMember.nickname != newMember.nickname) {
      if (oldMember.nickname == null) var oldnickname = oldMember.displayName;
      else var oldnickname = oldMember.nickname;
      if (newMember.nickname == null) var newnickname = newMember.displayName;
      else var newnickname = newMember.nickname;

      changes.addField("Old Nickname", oldnickname);
      changes.addField("New Nickname", newnickname);
    }
    var oldroles = oldMember.roles
      .map(roles => `${roles}`)
      .slice(1)
      .join("|");
    var newroles = newMember.roles
      .map(roles => `${roles}`)
      .slice(1)
      .join("|");

    var thenewroles = newMember.roles.filter(r => r.roles != oldMember.roles);

    if (oldroles != newroles) {
      if (!oldroles) var oldroles = "NONE";
      if (!newroles) var newroles = "NONE";
      changes.addField("Old Roles", oldroles);
      changes.addField("New Roles", newroles);
    }

    let rChannel = guild.channels.find(channel => channel.id === logschannel);
    rChannel.send(changes).then(() => {});
  });

  client.on("channelUpdate", function(oldChannel, newChannel) {
    const guild = newChannel.guild;
    if (!guildconfig[guild.id]) {
      guildconfig[guild.id] = {
        logs: "off",
        logschannel: "none"
      };
    }
    if (guildconfig[guild.id].logs != "on") return;
    var currentDate = new Date();

    if (oldChannel.name == newChannel.name) return;

    const changes = new Discord.RichEmbed()
      .setAuthor("A new changes Happend")
      .setColor("RANDOM")
      .setTimestamp(currentDate);
    if (oldChannel.name != newChannel.name) {
      if ((oldChannel.name = null)) var oldname = "Unknow";
      else var oldname = guild.oldChannel.name;
      if ((newChannel.name = null)) var newname = "Unknow";
      else var newname = guild.newChannel.name;
      changes.addField("Old Name", oldname);
      changes.addField("New Name", newname);
    }
    let logschannel = guildconfig[guild.id].logschannel;
    let rChannel = guild.channels.find(channel => channel.id === logschannel);
    rChannel.send(changes).then(() => {});
  });

  client.on("warn", function(info) {
    console.log(`Warn: ${info}`);
  });

  client.on("reconnecting", function() {
    console.log(`client tries to reconnect to the WebSocket`);
  });

  client.on("channelUpdate", function(oldChannel, newChannel) {
    const guild = newChannel.guild;
    if (!guildconfig[guild.id]) {
      guildconfig[guild.id] = {
        logs: "off",
        logschannel: "none"
      };
    }

    if (oldChannel.name == newChannel.name) return;

    if (guildconfig[guild.id].logs != "on") return;
    var currentDate = new Date();
    const Channelupdate = new Discord.RichEmbed()
      .setAuthor("A channel has been updated!")
      .addField("Channel", newChannel)
      .addField("Channel ID", newChannel.id)
      .setColor("RANDOM")
      .setTimestamp(currentDate);

    if (oldChannel.name != newChannel.name) {
      Channelupdate.addField("Old Name", oldChannel.name);
      Channelupdate.addField("New Name", newChannel.name);
    }
    let logschannel = guildconfig[guild.id].logschannel;
    let rChannel = guild.channels.find(channel => channel.id === logschannel);
    rChannel.send(Channelupdate).then(() => {});
  });

  /*client.on("messageDeleteBulk", function(message){
});
  const guild = message.guild
    if(!guildconfig[guild.id]){
     guildconfig[guild.id] = {
      logs: 'off',
      logschannel: 'none'
     }
  }
  console.log(guild)
  if(guildconfig[guild].logs != 'on') return;
  var currentDate = new Date();
  const newchannel = new Discord.RichEmbed()
  .setAuthor('A bunch of message has been deleted!')
  .addField('Channel', message.channel)
  .addField('Deleted Messages', message.size)
  .setColor('RANDOM')
  .setTimestamp(currentDate);
let logschannel = guildconfig[guild.id].logschannel
let rChannel = guild.channels.find(channel => channel.id === logschannel);
 rChannel.send(newchannel).then(() => {
  })
});
*/
} catch (err) {
  console.log("ERROR! : " + err);
}
client.login(process.env.BOT_TOKEN); //keep your token secret

