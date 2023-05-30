//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`
*❏ لـفـل جـديـد*

الاسم : ${username}
المنشن : @${who.replace(/@.+/, '')}

الـقديم : *${before}* \n\nالـجـديـد : *${user.level}*

 تـصـنـيـفـك : *${user.role}*
 
 *لاقـافـهـا اكـتـب*
*.off autolevelup*
	`
  conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
.trim())
    }
}
