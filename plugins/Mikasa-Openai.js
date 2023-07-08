import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*ادخل الشيء الذي تريد الذكاء الاصطناعي الرد عليه*\n\n*مثال*\n*◉ ${usedPrefix + command}من اخذ كأس العالم عام 2000*\n*◉ ${usedPrefix + command} اكتب كود من لغة جافاسربت*`
try {
m.reply(`*انتظر...*`)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*𝙴𝚁𝚁𝙾𝚁*`
}}
handler.command = ['bro', 'chatgpt', 'ai', 'siri', 'روبوت']
handler.diamond = false
export default handler
