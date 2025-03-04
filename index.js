const Discord = require("discord.js");
const { prefix } = require("./commands/prefix.json")
const bot = new Discord.Client();

const fs = require("fs");
const axios = require("axios");

const { CommandHandler } = require("djs-commands");
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: ['!']
})

const mongoose = require("mongoose");
mongoose.connect("", {useUnifiedTopology: true,useNewUrlParser: true,});


bot.once("ready", async () => {
    console.log("Logged into discord!")
    bot.user.setStatus("dnd");
})

bot.on("message",(message) => {
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (message.channel.type === "dm") return;
    if (message.author.type === "bot") return;
    let command = CH.getCommand(cmd);
    if(!command) return;
    try { 
        command.run(bot,message,args)
    } catch(e) { 
        console.log(e)
    }

})

bot.login("");




