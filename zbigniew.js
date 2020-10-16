import Discord from "discord.js";
const zbysiu = new Discord.Client({
    presence: {
        activity: {
            name: "jak PiS odbiera wam smak życia",
            type: "WATCHING"
        },
        status: "dnd"
    }
});
import token from "./dane/config.js";
import cytaty from "./dane/cytaty.js";

zbysiu.on("message", e => {
    if (!(e.author.bot || e.mentions.everyone) && e.mentions.has(zbysiu.user)) {
        e.channel.send(cytaty[Math.floor(Math.random() * cytaty.length)]);
    }
});

zbysiu.login(token);
