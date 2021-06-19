const discord = require("discord.js");
const client = new discord.Client();

client.login("ODU0Njc5MzI0NzIwMzY1NTk4.YMncJg.I4qsXqNYq3XbgQJ3YcJltKH5eMA");

client.on("ready", () => {
    console.log("ready");

    client.user.setPresence({
        status: "available",
        activity: {
            name: "SLAYER",
            type: "LISTENING",
        }
    });
});
