let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*هذا الامر يمكنه احذار صور عن الشيء الذي تكتبه*\n\n*مثال للاستخدام*\n*◉ ${usedPrefix + command} قمر*\n*◉ ${usedPrefix + command} سماء*`
try {
m.reply('*جاري تحضير الصوره !*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*حدث خطأ ما !*`
}}
handler.command = ['ai2', 'dalle', 'gen', 'صوره', 'صورة']
export default handler
