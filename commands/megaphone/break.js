const Commando = require('discord.js-commando');

module.exports = class BreakBulletCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "break",
            group: "megaphone",
            memberName: "break",
            description: "Shoot a break bullet towards a user!"
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const target = message.mentions.users.first();
        if (!target) return message.channel.send("You need to mention a user to shoot!");

        let shootTarget = message.guild.members.cache.get(target.id);

        message.channel.send(`You shot a **break** bullet at ${shootTarget}`);
    }
}