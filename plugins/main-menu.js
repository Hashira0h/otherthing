import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let username = conn.getName(who)

let str = `لسه ما انضافت !`
    conn.sendFile(m.chat, `https://telegra.ph/file/c15fce842890d1eb01a37.jpg`, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react()

}
handler.help = ['perfil']
handler.tags = ['group']
handler.command = ['اوامر'] 

export default handler
