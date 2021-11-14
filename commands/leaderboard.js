const {MessageEmbed} = require('discord.js');
const level = require("../models/levels")
exports.run = async (client, message, args) => {
  
  const data = await level.find({ guildID: message.guild.id });
  const leaderboard = data.sort((a,b) => b.level - a.level).map((user, index) => `${index + 1}. ${message.guild.members.cache.get(user.userID) ? message.guild.members.cache.get(user.userID) : "Kullanici bulunamadi."} - (${user.level} level)`).slice(0, 10).join("\n")
  
     const levelEmbed = new MessageEmbed()
  .setAuthor(message.guild.name+' TOP 10 AKTİFLİK', message.guild.iconURL())
   .setThumbnail(message.author.avatarURL())
  .setDescription(`**${message.guild.name}** Sunucunun en aktif ilk 10 sıralamasıdır. Burada ilk 3. sıralamasına girerek rol ve hediye kazanabilirsin. **Sadece metin kanalları.** \n \n ${leaderboard}`)
  .setColor('GREEN')
  message.channel.send({embeds: [levelEmbed]})
  
};

exports.name = "sıralama";