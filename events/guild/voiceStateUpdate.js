const Discord = require("discord.js");
const wait = require('util').promisify(setTimeout);

module.exports = async (d, client, oldState, newState) => {

    if (newState.id == "USERID") {
        if (newState.guild.id == "GUILDID") {
            await wait(1500)
            newState.disconnect()
        } else {
            await wait(3000)
            newState.disconnect()
        }
        
    }
}

