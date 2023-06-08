
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems }) => {
	var limit
     if((isOwner || isPrems)) limit = 1200
     else limit = 100
   if (!args[0]) throw `*ادخل رابط من ميديافاير بجانب الامر !*`
    if (!args[0].match(/mediafire/gi)) throw `❎ الرابط غير صحيح`
    m.react(rwait)
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = (isPrems || isOwner ? limit : limit) * 1012 < filesize
    let caption = `
   ┓━━━ *ميديا فاير* 
┫■ *الرقم:* ${filename}
┫■ *الحجم:* ${filesizeH}
┫■ *الامتداد:* ${ext}
┫■ *وقت الرفع:* ${aploud}
${isLimit ? `\n■ تجاوز الملف حد التنزيل *+${limit} MB*\nقم بالترقية إلى بريميام لتتمكن من تنزيل الملفات أكثر من *900 MB*` : ''} 
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
    
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
}
handler.help = ['mediafire <url>']
handler.tags = ['dl', 'prem']
handler.command = ['mediafire', 'ميديافاير'] 
handler.diamond = true
handler.premium = false

export default handler
