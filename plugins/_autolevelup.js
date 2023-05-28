//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`
*❏ لـفـل جـديـد*
الاسم : 
المنشن : ${taguser}
الـقديم : *${before}* \nالـجـديـد : *${user.level}*
 تـصـنـيـفـك : *${user.role}*
 
 _لاقـافـهـا اكـتـب_
_*/off autolevelup*_
	` conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)
.trim())
    }
}

