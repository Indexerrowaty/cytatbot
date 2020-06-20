const Discord = require("discord.js"),
  zbysiu = new Discord.Client({
    presence: {
      activity: { name: "jak PiS odbiera wam smak życia", type: "WATCHING" },
      status: "dnd"
    }
  });

zbysiu.config = require("./dane/config.json");
zbysiu.cytaty = require("./dane/cytaty.js").cytaty;

process.on("unhandledRejection", e => console.error(`Błąd: ${e}`));

zbysiu.on("message", e => {
  if (!(e.author.bot || e.mentions.everyone) && e.mentions.has(zbysiu.user)) {
    e.channel.send(
      zbysiu.cytaty[Math.floor(Math.random() * zbysiu.cytaty.length)]
    );
  }
});

zbysiu.login(zbysiu.config.TOKEN);