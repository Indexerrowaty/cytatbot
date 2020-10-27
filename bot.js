import Discord from "discord.js";
import token from "./dane/token.js";
import quotes from "./dane/quotes.js";

const bot = new Discord.Client({
    presence: {
        activity: {
            name: "jak PiS odbiera wam smak życia",
            type: "WATCHING"
        },
        status: "dnd"
    }
});

bot.on("message", e => {
    if (e.content == `<@${bot.user.id}>`) {
        e.channel.send(quotes[Math.floor(Math.random() * quotes.length)]);
    }
});

bot.login(token);