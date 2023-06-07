import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `*رد على المقطع الصوتي الذي تريدتني ان احوله* ثم اكتب :\n *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '*فشلت عملية التحويل*'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '*فشلت عملية التحويل*'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['toav']
handler.tags = ['fun']

handler.command = ['toav', 'لفويس'] 

export default handler
