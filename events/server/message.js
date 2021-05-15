const Commando = require('discord.js-commando');
const Discord = require('discord.js');

/**
 * @param {Discord} Discord 
 * @param {Commando.CommandoClient} client 
 * @param {Commando.CommandoMessage} message 
 */
module.exports = async (Discord, client, message) => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        const pingedMessages = [
            "Where's big brother?",
            "Makoto is Makoto, and I am me.",
            "Are there any Monokumas around here?",
            "Amazing!",
            "Me and Toko explored Towa City today.",
            "Why do people ship me with Toko? It's kinda embarrassing.",
            "D-Did you just poke me?"
        ];

        const pingedMessage = pingedMessages[Math.floor(Math.random() * pingedMessages.length)];

        message.channel.send(pingedMessage);
    }
}