const fetch = require('node-fetch'),
    Discord = require('discord.js'),
    client = new Discord.Client();

client.on('ready', async () => {
    console.log(`${client.user.tag} is ready !`)
    client.user.setActivity(`made by baby`)
})
 
client.on("message", async (message) => {
  let args = message.content.trim().split(' ').slice(1);
if(message.author.bot) return;
  if (message.content.includes('.help')) {
message.channel.send(`.youtube - Youtube Together\n.poker - Poker Night\n.betrayal - Betrayal.io\n.fishington - Fishington.io`)
	}
	})

client.on("message", async (message) => {
  let args = message.content.trim().split(' ').slice(1);
if(message.author.bot) return;

  if (message.content.startsWith('.youtube')) {
      const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid channel specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I need `CREATE_INSTANT_INVITE` permission");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913", // youtube together
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (!invite.code) return message.channel.send("❌ | Could not start **YouTube Together**!");
                message.channel.send(`✅ | Click here to start **YouTube Together** in ${channel.name} <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("❌ | Could not start **YouTube Together**!");
            })
	}
	})
	
client.on("message", async (message) => {
  let args = message.content.trim().split(' ').slice(1);
if(message.author.bot) return;

  if (message.content.startsWith('.poker')) {
      const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid channel specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I need `CREATE_INSTANT_INVITE` permission");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755827207812677713", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (!invite.code) return message.channel.send("❌ | Could not start **Poker Night**!");
                message.channel.send(`✅ | Click here to start **Poker Night** in ${channel.name} <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("❌ | Could not start **Poker Night**!");
            })
	}
	})
	
client.on("message", async (message) => {
  let args = message.content.trim().split(' ').slice(1);
if(message.author.bot) return;

  if (message.content.startsWith('.betrayal')) {
      const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid channel specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I need `CREATE_INSTANT_INVITE` permission");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "773336526917861400", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (!invite.code) return message.channel.send("❌ | Could not start **Betrayal.io**!");
                message.channel.send(`✅ | Click here to start **Betrayal.io** in ${channel.name} <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("❌ | Could not start **Betrayal.io**!");
            })
	}
	})
	
client.on("message", async (message) => {
  let args = message.content.trim().split(' ').slice(1);
if(message.author.bot) return;

  if (message.content.startsWith('.fishington')) {
      const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid channel specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I need `CREATE_INSTANT_INVITE` permission");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "814288819477020702", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (!invite.code) return message.channel.send("❌ | Could not start **Fishington.io**!");
                message.channel.send(`✅ | Click here to start **Fishington.io** in ${channel.name} <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("❌ | Could not start **Fishington.io**!");
            })
	}
	})
	
	client.login(`token`)
