const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const webdict = require('webdict');
const giphy = require('giphy-api')(auth.giphy);

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

var capitalize = require('capitalize')
var array = {};
var joshMute = false;

array['salt'] = 0;

client.on('ready', () => {
	console.log('I am ready!');
	client.user.setGame('with knives');
});

// Database Defaults
// Set some defaults
// db.defaults({ salts: []}).write();
// Set some defaults
// db.defaults({ posts: [], user: {} })
//   .write()


client.on('message', message => {
	const saltEmoji = client.emojis.find("name", "salt");
	if (message.author.bot) return;
	if (message.content.startsWith('/saltcount')) {
		message.channel.send(array['salt']);
		return;
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
	if (message.content.startsWith('/celebrateJosh')) {
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
		message.channel.send('WEW LAD CONGRATS');
	}
	if (message.content.indexOf('salt') != -1) {
		array['salt']++;
		message.react(saltEmoji.id)
	}
	if (message.content.toLowerCase().indexOf('josh') != -1 && !joshMute && !message.content.startsWith('/mutejosh')) {
		message.reply('Psst... Did you know, Josh went :one::heavy_minus_sign::one::one:, the salty cunt.');
	}
	if (message.content.startsWith('/saltcheck')) {
		message.react(saltEmoji.id)
	}
	if (message.content.toLowerCase() == 'f') {
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
	

	if (message.content.startsWith('/mildban')) {
		var str = message.content.substring(9);
		if (str.toLowerCase() == 'salt bot') {
			message.channel.reply('Neaw fuck off');
		}
		message.channel.send(':hammer: **Banned!**');
		message.channel.send('**' + str.toUpperCase() + '** has left the server');
	}

	if (message.content.toLowerCase() == '/showme something beautiful') {
		message.channel.send("[11:58 AM] Jason^ (Mage Level 99): Only time bens hot is when he's crawling up on your mum tom");
		message.channel.send("[11:58 AM] Coolbeans: it all makes sense now");
		message.channel.send("[11:59 AM] Coolbeans: his names tom");
		message.channel.send("[11:59 AM]  ϟϟ  ⭆𝓟𝓻𝓾𝓷𝒆𝔂⭅   ϟϟ: he can crawl up my mum if he wants");
		message.channel.send("[11:59 AM]  ϟϟ  ⭆𝓟𝓻𝓾𝓷𝒆𝔂⭅   ϟϟ: as long as he treats her right");
		message.channel.send("[11:59 AM] Coolbeans: no wonder he's a dickhead");
	}

	if (message.content.startsWith('/gif')) {
		var str = message.content.substring(5);
		// Search with options using promise 
		giphy.random(str).then(function (res) {
				// Res contains gif data! 
				console.log(res.data.image_url);
				message.channel.send(res.data.image_url);
		});
	}

	var serverOwnerReplies = [
		":crown: ALL :clap: HAIL :clap: KING :clap: LUCAS! :crown:",
		"EYUP! THA KING IS ERE",
		"King of the Rats has arrived",
		"Quiet down peasents, King Lucas is speaking :crown:",
		"I am here to please our Lord Lucas :crown:"
		];
	var chanceMax = 100;
	var chanceMin = 1;
	if ((Math.floor(Math.random() * (chanceMax - chanceMin + 1)) + chanceMin) == 6 && message.author.id == 161576429035716608) {
		message.channel.send(serverOwnerReplies[Math.floor(Math.random() * serverOwnerReplies.length)]);
	}

	if (message.content.toLowerCase() == 'who is king?') {
		var text = '```';
		text += '\r\n';
		text += '🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒\r\n';
		text += '🆒👑🆒🆒🆒🆒🆒🆒👑🆒🆒🆒👑🆒🆒🆒👑👑👑🆒🆒🆒🆒🆒👑🆒🆒🆒🆒🆒👑👑👑👑🆒\r\n';
		text += '🆒👑🆒🆒🆒🆒🆒🆒👑🆒🆒🆒👑🆒🆒👑🆒🆒🆒👑🆒🆒🆒👑🆒👑🆒🆒🆒👑🆒🆒🆒🆒🆒\r\n';
		text += '🆒👑🆒🆒🆒🆒🆒🆒👑🆒🆒🆒👑🆒🆒👑🆒🆒🆒🆒🆒🆒👑🆒🆒🆒👑🆒🆒🆒👑👑👑🆒🆒\r\n';
		text += '🆒👑🆒🆒🆒🆒🆒🆒👑🆒🆒🆒👑🆒🆒👑🆒🆒🆒👑🆒🆒👑👑👑👑👑🆒🆒🆒🆒🆒🆒👑🆒\r\n';
		text += '🆒👑👑👑👑👑🆒🆒🆒👑👑👑🆒🆒🆒🆒👑👑👑🆒🆒🆒👑🆒🆒🆒👑🆒🆒👑👑👑👑🆒🆒\r\n';
		text += '🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒\r\n';
		text += '```';
		message.channel.send(text);
	}

	if (message.content.toLowerCase() == 'wat') {
		message.channel.send('wut');
	}
	if (message.content.toLowerCase() == 'wot') {
		message.channel.send('wat');
	}
	if (message.content.toLowerCase() == 'wut') {
		message.channel.send('wot');
	}

	// DEBUG
	// console.log(message.author);
	
});

client.login(auth.token);

function saltIncrement(user) {
	// Add a post
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()
}