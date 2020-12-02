import { Client } from "discord.js";
import token from "./dane/token.js";
import quotes from "./dane/quotes.js";

const bot = new Client({
    presence: {
        activity: {
            name: "niczego",
            type: "LISTENING"
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
