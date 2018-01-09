const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const webdict = require('webdict');

var capitalize = require('capitalize')
var db = {};
var joshMute = false;

db['salt'] = 0;

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setGame('with ur mam');
});


client.on('message', message => {
  const saltEmoji = client.emojis.find("name", "salt");
  if (message.author.bot) return;
  if (message.content.startsWith('/saltcount')) {
    message.channel.send(db['salt']);
    return;
  }
  if (message.content.indexOf('salt') != -1) {
  	db['salt']++;
    message.react(saltEmoji.id)
  }
  if (message.content.indexOf('josh') != -1 && !joshMute && !message.content.startsWith('/mutejosh')) {
    message.reply('Psst... Did you know, Josh went :one::heavy_minus_sign::one::one:, the salty cunt.');
  }
  if (message.content.startsWith('/saltcheck')) {
    message.react(saltEmoji.id)
  }
  if (message.content.indexOf('/pressf') != -1) {
    message.channel.send('Paying respects.');
    message.channel.send(':one::heavy_minus_sign::one::one:');
    message.channel.send('Never Forget.');
  }
  if (message.content.indexOf('2 toke') != -1 || message.content.indexOf('two toke') != -1 && !joshMute) {
    message.channel.send('TWO TOKE DRURY');
  }
  if (message.content.indexOf('share da love') != -1 && !joshMute) {
    message.channel.send(':heart: Drury');
  }
  if (message.content.toLowerCase().indexOf('pubg') != -1) {
    message.channel.send('DEAD GAME');
  }

  if (message.content.startsWith('/loveme')) {
    var x = Math.round(parseFloat(message.content.split(' ')[1]));
    if (x > 10) {
      message.reply('fuck off too much love for thee cunt');
      return;
    } 
    for (i = 1; i <= parseInt(x); i++) {
      message.reply(':heart:');
      message.react('❤');
     } 
  }
  if (message.content === "listemojis") {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.channel.send(emojiList);
  }
  if (message.content === "show me da way") {
    message.channel.send('You do not know da way');
  }

  if (message.content.startsWith('/urbandef')) {
    var str = message.content.substring(10);
    webdict('urbandictionary', str)
    .then(resp => {
        message.channel.send('**Definintion of ' + capitalize.words(str) + '**');
        message.channel.send(resp.definition);
    })
    .catch(error => {
        console.log(error);
    });
  }

  if (message.content.indexOf('DA WAY MY BROTHERS') != -1) {
    message.reply('YOU MUST HAVE EBOLA BECAUSE U KNO DA WAY!');
  }

  if (message.content.startsWith('/oxdef')) {
    var str = message.content.substring(7);
    webdict('dictionary', str)
    .then(resp => {
        message.channel.send('**Definintion of ' + capitalize.words(str) + '**');
        message.channel.send(resp.definition);
    })
    .catch(error => {
        console.log(error);
    });
  }

  if (message.content.startsWith('/nastytest')) {
    message.channel.send('@Pebble™#9228');
  }
  if (message.content.startsWith('/mutejosh')) {
    if (joshMute) {
      joshMute = false;
      message.channel.send('Unmuted.');
    } else {
      joshMute = true;
      message.channel.send('Muted.');
    }
  }
  
});

client.login(auth.token);