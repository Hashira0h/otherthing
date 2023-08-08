import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*ادخل اسم الاغنيه*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result
let spotifyi = `❒───❬ S P O T I F Y ❭───❒\n\n✨ *العنوان:* ${title}\n\n🗣️ *صاحب العمل:* ${artists}\n\n🌐 *الرابط*: ${link}\n\n💚 *رابط البحث:* ${json2.result.link}`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch {
throw '*خطأ*'
}}
handler.command = /^(spotify|سبوتيفاي)$/i
export default handler
