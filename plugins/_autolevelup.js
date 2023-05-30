//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`
*❏ لـفـل جـديـد*

الاسم : ${name}
المنشن : ${registered ? '\n   • ' + name + ' ': ''}

الـقديم : *${before}* \n\nالـجـديـد : *${user.level}*

 تـصـنـيـفـك : *${user.role}*
 
 *لاقـافـهـا اكـتـب*
*.off autolevelup*
	`
  conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
.trim())
    }
}
