const Commando = require('discord.js-commando');

module.exports = class MoveBulletCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "move",
            group: "megaphone",
            memberName: 'move',
            description: "Shoot a move bullet towards a user!"
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     */
    async run(message) {
        const target = message.mentions.users.first();
        if (target) {
            let shootTarget = message.guild.members.cache.get(target.id);
            message.channel.send(`You shot a **move** bullet at ${shootTarget}`);
        } else {
            message.channel.send("You need to mention a user to shoot!");
        }
    }
}