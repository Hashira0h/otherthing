
import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `☆ ادخل رابط تيك توك\n\n 📌 مثال : ${usedPrefix + command} https://www.tiktok.com/@svsvkes/video/7177431175273794822?is_from_webapp=1&sender_device=pc&web_id=7242157033230681606`
if (!args[0].match(/tiktok/gi)) throw `❎ تأكد ان هذا الرابط من تيك توك`
m.react(rwait)

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
■━━【 تيك توك 】━━■
□ *اسم المستخدم:* ${p.author}
□ *الوصف:* ${p.title}
└───────────────`
    conn.sendButton(m.chat, te, igfg, p.nowm, [['⎘ Stalkig', `${usedPrefix}ttstalk ${p.author.replace(/^@/, '')}`], ['♫ Audio', `${usedPrefix}tomp3`]], m)
    m.react(done)
    } catch {  	
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ حدث خطأ ما اثناء تنزيل الفيديو'
    conn.sendButton(m.chat, `
■━━【 تيك توك 】━━■
□ *الاسم:* ${nickname} ${description ? `\n▢ *Description:* ${description}` : ''}
└───────────────`, igfg, url, [['♫ Audio', `${usedPrefix}tomp3`]], m)
m.react(done)
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|تيكتوك)$/i
handler.diamond = true

export default handler
