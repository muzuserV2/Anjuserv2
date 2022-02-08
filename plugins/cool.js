const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://imgur.com/a/Frcrz99.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot owner Joshuva💞*

*Creator number : http://wa.me/918129900380*


 *ᴊᴏꜱʜᴜᴠᴀꜱᴇʀ ʙᴏᴛ: https://chat.whatsapp.com/DG87G5A3cEz4hLTH5LKbPL


 *ᴊᴏꜱʜᴜᴠᴀꜱᴇʀꫂ⁩..♡︎*
`}) 

}));
