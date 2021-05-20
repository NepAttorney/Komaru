const Commando = require('discord.js-commando');

module.exports = class ParalyzeBulleyCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "paralyze",
            group: "megaphone",
            memberName: "paralyze",
            description: "Shoot a paralyze bullet towards a user!"
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     */
    async run(message) {
        const target = message.mentions.users.first();
        if (target) {
            let shootTarget = message.guild.members.cache.get(target.id);
            message.channel.send(`You shot a **paralyze** bullet at ${shootTarget}`);
        } else {
            message.channel.send("You need to mention a user to shoot!");
        }
    }
}