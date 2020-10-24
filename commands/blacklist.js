const Discord = require("discord.js")
const { prefix } = require("./prefix.json")
const axios = require("axios");
const ms = require("ms")


module.exports = class Blacklist{
    constructor(){
        this.name = 'blacklist',
        this.alias = ['b'],
        this.usage = `${prefix}blacklist`
    }
    run(bot,message,args){
     
        // !b <@user> <reason> <time>
       // https://yunite.xyz/api/v1/servers/565910084354310154/regsys/user/:USER_ID/block

       let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
       if(!user) return message.channel.send("User error placeholder")

       let reason = args[1]
       if(!reason) return message.channel.send("Reason error placeholder")
       //if(!reason.isString) return message.channel.send("Reason should be a string")

       let time = args[2]
       if(!time) return message.channel.send("Time error placeholder")


       let role = message.guild.roles.cache.get("678193711947186208");
       if(!role) return message.channel.send("Role error placeholder")

       var post_data = {
          'naam' : 'TERA BAAP HU BHOSDIKE'
       }

       var post_headers = { 
           headers : { 
            'Y-Api-Key' : ''
           }
       }

       axios.post(`https://yunite.xyz/api/v1/servers/565910084354310154/regsys/user/${user.id}/block?blockLinkedAccount=true&reason=GRAPHITE_API_BLOCK`,post_data,post_headers)
       .then(function (response){
           console.log(response);
       })
       .catch(function (error){
           console.log(error);
       })

       user.roles.add(role);
      

       message.channel.send("Test successful.")
    }
}
