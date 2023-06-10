
import { promisify } from 'util'
import _gis from 'g-i-s'
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `❖ ادخل اسم الصورة الذي تريد البحث عنها\n\n📌 مثال: *${usedPrefix + command}* Gojo Saturo`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '❎ لم اجد الصوره'
  conn.sendFile(m.chat, url, 'img.png', `
✅ النتيجه : *${text}*

⏣ *عرض*: ${width}
⏣ *طول*: ${height}
`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|صوره|ص)$/i
handler.diamond = true

export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


