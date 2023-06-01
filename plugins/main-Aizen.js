let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./src/mp3/${pickRandom(["aizen"])}.mp3`
let contact = '@.201206178781'
client.on('message', async (msg) => {
    const mentions = await msg.getMentions();

m.reply( `ايزن هو عمي ${contact.pushname}`)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(عمك|صوفيا مين عمك)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
