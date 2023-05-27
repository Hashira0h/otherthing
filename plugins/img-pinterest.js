import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `⌬ عن ماذا تريدني ان ابحث؟\n\n❒ مثال  : ${usedPrefix + command} غوجو`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*❒  بينتيرست:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['بينتيرست'] 

export default handler
