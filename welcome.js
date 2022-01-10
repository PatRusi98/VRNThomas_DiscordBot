module.exports = (client) => {
    const channelId = "775763584483197009";
    const readThis = "852180470544597012";
    client.on("guildMemberAdd", (member) => {
        console.log(member);

        const message = `Welcome <@${member.id}> to *Virtual Racing Nation*! Use your real name please. If you have any 
                            questions, make sure to check out ${member.guild.channels.cache.get(readThis).toString()} and contact 
                            one of our administrators.`;

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};