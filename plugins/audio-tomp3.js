import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `*رد على فيديو او مقطع صوتي لتحويله ل مقطع صوتي ثم اكتب* :\n\n*${usedPrefix + command}*`*/
    let media = await q.download?.()
    if (!media) throw '*حدث خطأ*'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '*فشلت عملية التحويل*'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = /^to(tomp3|لصوت)$/i

export default handler
