let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let username = conn.getName(who)
let bv = `./src/mp3/${pickRandom(["Aizen"])}.jpg`
let av = `./src/mp3/${pickRandom(["aizen"])}.mp3`

m.reply( `يا ${username} ايزن هو عمي 🫡🤍`)
conn.sendFile(m.chat, bv, 'picturejpg', null, m, true, { type: 'pictureMessage', ptt: true })
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}

handler.customPrefix = /^(عمك|صوفيا مين عمك)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
