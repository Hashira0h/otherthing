
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Enter the number you want to send a group invite to\n\n📌 Example :\n*${usedPrefix + command}* 7605902011`
if (text.includes('+')) throw  `✳️ Ingrese el número todo junto sin el *+*`
if (isNaN(text)) throw ' 📌 Enter only numbers plus your country code with no spaces'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *دعوة لدخول الجروب*\n\nدعاك مستخدم للانضمام إلى هذه المجموعة \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`تم إرسال رابط الدعوة إلى المستخدم`) 

}
handler.help = ['invite <917xxx>']
handler.tags = ['group']
handler.command = ['دعوة','دعوه'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
