const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const fs = require("fs");
const { handleVideo, queue } = require("../index.js")
const { Util, RichEmbed } = require("discord.js");
const Discord = require('discord.js') // 
const youtube = new YouTube(process.env.YOUTUBE);
const math = require('mathjs')
exports.run = async (bot, msg, args) => {
  args = args.slice(0)
  const searchString = args.join(' ');
	const url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
  
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send(':no_good: I\'m sorry but you need to be in a voice channel to play music!');
    if (!args[0]) return msg.channel.send(`:warning: Please following the code! : T!play **[Song Name/URL/Playlist URL]**`)
		const permissions = voiceChannel.permissionsFor(msg.client.user);
  if (!permissions.has('VIEW_CHANNEL')) {
			return msg.channel.send(':no_good: I cannot connect to your voice channel, make sure I have view channel permissions!');
		}
		if (!permissions.has('CONNECT')) {
			return msg.channel.send(':no_good: I cannot connect to your voice channel, make sure I have connect permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send(':no_good: I cannot speak in this voice channel, make sure I have speak permissions!');
		}
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
          
          
					var videos = await youtube.searchVideos(searchString, 100);
          
          let time = 120 //Put in seconds.

//Do not change this, unless you're knowing what are you doing, Only change embed color or embed Description such a, 'TEXT HERE' Or Map Script
let maxpagef = videos.length / 10
var forembed = [];
var maxpage = maxpagef.toFixed(1)
if(maxpage === 0) var maxpage = 1
if(maxpage % 1 != 0) var maxpage = parseInt(maxpage) + 1
var page = 1
var index = 0;
var min = 0
var max = 9
var maxcount = max

for(var i = min; i <= max; i++) {
    if(videos.length <= i) break;
    forembed.push(videos[i]);
    }

console.log(forembed)

const embed = new Discord.RichEmbed() 
    .setColor('BLACK')
    .setFooter(`Please Select From 1 - ${videos.length} | Page ${page} of ${maxpage}`) 
    .setDescription(`Song selection\n${forembed.map(themap => `**${++index}** - ${themap.title}`).join('\n')}`)
 
  msg.channel.send(embed).then(async msgn2 => { 

    var forembed = []
   
    msgn2.react('⏪').then(r2 => {
     msgn2.react('⏹').then(r3 => {
      msgn2.react('⏩').then(r4 => {

        if(maxpage === 1) 
        {
            r2.users.forEach(u => {
                r2.remove(u.id)
                })

                r4.users.forEach(u => {
                    r4.remove(u.id)
                    })
        }
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === msg.author.id;
      const stopFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === msg.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === msg.author.id;
     
      const backwards = msgn2.createReactionCollector(backwardsFilter, { time: time*1000 }); 
      const stop = msgn2.createReactionCollector(stopFilter, { time: time*1000 });
      const forwards = msgn2.createReactionCollector(forwardsFilter, { time: time*1000 });

      var ended = false

      stop.on('collect',async r => {
            if(ended === true) return;
            ended = true
            if(maxpage != 1) {

            r4.users.forEach(u => {
            r4.remove(u.id)
            })
            r3.users.forEach(u => {
            r3.remove(u.id)
            })

            r2.users.forEach(u => {
            r2.remove(u.id)
            })

            } else {
                r3.users.forEach(u => {
                    r3.remove(u.id)
                    })
            }

            embed.setTitle('Cancelled!')
            embed.setDescription('Please wait. . .')
            embed.setFooter('Thank for using Embed Pageination Script! :D');

            msgn2.edit(embed).then(msgn2 => {

                setTimeout(function presssend(){
                    msgn2.delete()
                 }, 20000);

        })

           return;

      })

      stop.on('end',r => {
        if(ended === true) return;
        ended = true

        if(maxpage != 1) {

            r4.users.forEach(u => {
            r4.remove(u.id)
            })
            r3.users.forEach(u => {
            r3.remove(u.id)
            })

            r2.users.forEach(u => {
            r2.remove(u.id)
            })

            } else {
                r3.users.forEach(u => {
                    r3.remove(u.id)
                    })
            }

            embed.setTitle('Session Ended.!')
            embed.setDescription('Please wait. . .')
            embed.setFooter('Thank for using Embed Pageination Script! :D');

            msgn2.edit(embed).then(msgn2 => {

                setTimeout(function sessionend(){
               msgn2.delete()
            }, 20000);

            });

        return;

      })     
      
      backwards.on('collect', r => {
        if(ended === true) return;
        r.remove(msg.author.id)
        if (page === 1) return; 

        forembed = [];

        min = math.eval(min - 10)
        max = math.eval(max - 10)
        maxcount = math.eval(maxcount - 10)
        index = min

for(var i = min; i <= max; i++) {
    if(videos.length <= i) break;
    forembed.push(videos[i])
    }

        page--; 

        embed.setDescription(`Song selection\n${forembed.map(themap => `**${++index}** - ${themap.title}`).join('\n')}`)
        embed.setFooter(`Please Select From 1 - ${videos.length} | Page ${page} of ${maxpage}.`); 
        msgn2.edit(embed) 
      })


     
      forwards.on('collect', r => {
          if(ended === true) return;
          r.remove(msg.author.id)
        if (page >= maxpage) return;

        forembed = [];

        page++;

        min = math.eval(min + 10)
        max = math.eval(max + 10)
        maxcount = math.eval(maxcount + 10)
        index = min

        if(videos.length <= max) max = videos.length - 1

        if(videos.length > 10 || page === 1 || max < 10) max = maxcount

        if(videos.length > max || videos.length - max > 10) max = maxcount

for(var i = min; i <= max; i++) {
    if(videos.length <= i) break;
    forembed.push(videos[i])
    }
        embed.setDescription(`Song selection\n${forembed.map(themap => `**${++index}** - ${themap.title}`).join('\n')}`)
        embed.setFooter(`Please Select From 1 - ${videos.length} | Page ${page} of ${maxpage}.`); 
        msgn2.edit(embed)

          })

        })

      })

    })

  })
          
          
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < videos.length, {
							maxMatches: 1,
							time: time*1000,
							errors: ['time']
						})
					} catch (err) {
						console.error(err);
						return msg.channel.send(':no_good: No or invalid value entered, cancelling video selection.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':no_good: I could not obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	}

exports.help = {
    name: "play",
    aliases: ['p']
}