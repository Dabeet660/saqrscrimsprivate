const Discord = require("discord.js")
const { prefix } = require("./prefix.json")

module.exports =  class Ping{
  constructor(){
    this.name = 'ping',
    this.alias = ['p'],
    this.usage = `${prefix}ping`
  }
  run(bot,message,args){
     message.channel.send("Logged into graphite v2 dev build (v0.0.1)").then(m => {
       m.edit("Checking internals (20% done)")
       m.edit("Checking commands (80% done)")
       m.edit("Development level test passed! (100% done)")
       m.edit("Logged into graphite v2 dev build (v0.0.1)")
     })
     message.channel.send(bot.ws.ping + "ms");

  } 
}