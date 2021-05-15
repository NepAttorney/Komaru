const Commando = require('discord.js-commando');

module.exports = class DanceBulletCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "dance",
            group: "megaphone",
            memberName: "dance",
            description: "Shoot a dance bullet towards a user!"
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     */
    async run(message) {
        const target = message.mentions.users.first();
        if (target) {
            let shootTarget = message.guild.members.cache.get(target.id);
            message.channel.send(`You shot a **dance** bullet at ${shootTarget} and they started dancing!`);
        } else {
            message.channel.send("You need to mention a user to shoot!");
        }
    }
}