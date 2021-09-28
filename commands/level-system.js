const guildsModel = require("../models/guild");
exports.run = async (client, message, args) => {
  if (args[0] == "aç") {
    await guildsModel.updateOne({ guildID: message.guild.id }, { $set: { levelSystem: true } }, { upsert: true })
    message.channel.send({content: 'level sistem aktif'})
  } else if (args[0] == "kapat") {
    await guildsModel.updateOne({ guildID: message.guild.id }, { $unset: { levelSystem: 1 } }, { upsert: true })
    message.channel.send({content: 'level sistem kapalı'})
  } else {
    message.channel.send({content: "arguman belirtmelisin? `levels-system ac/kapat`"});
  }
};

exports.name = "levelsystem"


