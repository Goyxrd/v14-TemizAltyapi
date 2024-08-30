module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Girildi - ${client.user.tag}`);
        client.user.setPresence({
            activities: [
                {
                    name: 'Goyxrd <3 Valenti', // (Etkinlik ismi)
                    type: 0 // (0: PLAYING, 1: STREAMING, 2: LISTENING, 3: WATCHING)
                }
            ],
            status: 'online' // ('online', 'idle', 'dnd', 'invisible')
        });
    },
};
