
import fg from 'api-dylux'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let limit = 350
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `❖ مثال :\n${usedPrefix + command} https://youtu.be/pO5dgZrM9Mk`
    if (!args[0].match(/youtu/gi)) throw `❎ تاكد من ان الرابط من يوتيوب`
	 let chat = global.db.data.chats[m.chat]
	 m.react(rwait) 
	try {
		let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 
		
       if (size.split('MB')[0] >= limit) return m.reply(` 〖 تحميل من يوتيوب 〗◎ *⚖️المساحه* : ${size}\n◎ *🎞️الجوده* : ${q}\n\n◎ _لا يمكنني تحميله_ *+${limit} MB*`)    
	  conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ☃  *Mikasa YTDL*
  
◎ *📌العنوان* : ${title}
◎ *📟 صنفه* : mp4
◎ *🎞️الجوده* : ${q}
◎ *⚖️المساحه* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
		
	} catch {
		
		const { title, result, quality, size, duration, thumb, channel } = await fg.ytv(args[0]) 
		if (size.split('MB')[0] >= limit) return m.reply(` 〖 تحميل من يوتيوب 〗\n\n❖ *⚖️المساحه* : ${size}\n❖ *🎞️الجوده* : ${quality}\n\n❖ _تجاوز الملف حد التنزيل_ *+${limit} MB*`)
	conn.sendFile(m.chat, result, title + '.mp4', `
〖 تحميل من يوتيوب 〗
  
❖ *📌 العنوان* : ${title}
❖ *📟 نوع الملف* : mp4
❖ *⚖️ المساحه* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
	} 
		 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'فيديو']
handler.diamond = true

export default handler
