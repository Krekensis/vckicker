const Discord = require("discord.js");
const wait = require('util').promisify(setTimeout);

module.exports = async (d, client, oldState, newState) => {

    if (newState.id == "270904126974590976") {
        if (newState.guild.id == "1024740855510204487") {
            await wait(1500)
            newState.disconnect()
        } else {
            await wait(3000)
            newState.disconnect()
        }
        
    }
}

