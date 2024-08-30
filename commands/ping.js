const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Botun gecikmesini ve API gecikmesini görüntüler',
    async execute(message) {
        const botLatency = Date.now() - message.createdTimestamp;
        const apiLatency = Math.round(message.client.ws.ping);

        const embed = new EmbedBuilder()
            .setColor('#00ff00') 
            .setTitle('Ping Command') 
            .setDescription('İstediğiniz gecikme bilgisi şu şekilde:')
            .addFields(
                { name: 'Bot gecikmesi', value: `${botLatency}ms`, inline: true },
                { name: 'API gecikmesi', value: `${apiLatency}ms`, inline: true }
            )
            .setTimestamp()
            .setFooter({ text: 'Valenti <3 Goyxrd', iconURL: 'URL' }); 

        await message.reply({ embeds: [embed] });
    },
};
