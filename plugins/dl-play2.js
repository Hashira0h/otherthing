
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `ادخل اسم الشيء الذي تريد البحث عنه !\n\n*📌 مثال :*\n*${usedPrefix + command}* ايتوشي رين`
    m.react('📀')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url}`, `■ *المده:* ${v.timestamp}\n■ 👀 *المشاهدات:* ${v.views}\n■ 📌 *العنوان* : ${v.title}\n■ 📆 *منشورة:* ${v.ago}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url}`, `■ *المده:* ${v.timestamp}\n■ 👀 *المشاهدات:* ${v.views}\n■ 📌 *العنوان* : ${v.title}\n■ 📆 *منشورة:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ◌ *MIKASA MUSIC* ◌', `\n 📀 هنا قائمة النتائج من :\n *${text}*`, igfg, `Click `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['شغل2', 'playvid2', 'playlist', 'playlista'] 

export default handler
