
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `◄ المستخدم غير موجود في قاعدة البيانات الخاصة بي`
    conn.reply(m.chat, `
═──═〖 *BALANCE* 〗═──═
║□ *📌المنشن* : _@${who.split('@')[0]}_
║□ *💎الجواهر* : _${user.diamond}_
║□ *💎الذهب* : _${user.gold}_
║□ *💎الصخر* : _${user.rock}_
║□ *💎الزمرد* : _${user.emerald}_
║□ *💎التصنيف* : _${user.role}_
║□ *💎الصحه* : _${user.health}_
║□ *💎الخشب* : _${user.wood}_
║□ *💎الجرع* : _${user.potion}_
║□ *💎الحديد* : _${user.iron}_
║□ *💎الفلوس* : _${user.money}_
║□ *⬆️الاكس بي* : _Total ${user.exp}_
═──══──══──══──══──═

*ملحوظه :* 
*يمكنك شراء 💎 جواهر باستخدام هذا الامر*
❏ *${usedPrefix}لجواهر* <القدر>`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['balance', 'ممتلكاتي'] 

export default handler
