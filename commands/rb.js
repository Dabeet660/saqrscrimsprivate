const Discord = require("discord.js");
const { prefix } = require("./prefix.json");
const axios = require("axios");
const ms = require("ms");

module.exports = class Rb{
    constructor(){
        this.name = 'rb',
        this.alias = ['rb'],
        this.usage = `${prefix}rb`
    }
    run(bot,message,args){
        
        // !rb <@user> <reason> <time>

       let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
       if(!user) return message.channel.send("User error placeholder")

       let role = message.guild.roles.cache.get("678193711947186208");
       if(!role) return message.channel.send("Role error placeholder")

       user.roles.remove(role);
       message.channel.send("Test successful.")
    }
}