import Discord from "discord.js";
import token from "./dane/config.js";
import cytaty from "./dane/cytaty.js";

const zbysiu = new Discord.Client({
    presence: {
        activity: {
            name: "jak PiS odbiera wam smak życia",
            type: "WATCHING"
        },
        status: "dnd"
    }
});

zbysiu.on("message", e => {
    if (e.cleanContent.trim() == `<@${zbysiu.user.id}>`) {
        e.channel.send(cytaty[Math.floor(Math.random() * cytaty.length)]);
    }
});

zbysiu.login(token);
