let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let username = conn.getName(who)
let bv = `./sticker/${pickRandom(["st1"])}.webp`

conn.sendFile(m.chat, bv, 'sticker.webp', null, m, true, { type: 'pictureMessage', ptt: true })
}

handler.customPrefix = /^(ارفعني ادمن)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
