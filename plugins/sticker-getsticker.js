
import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `❑ اكتب الشيء الذي تريد ان تبحث عنه \n\n*مثال:*\n${usedPrefix + command} غوجو`
    
    //Resultados de https://getstickerpack.com/
    try {
   /*let res = await fetch(global.API('fgmods', '/api/getsticker', { q:text }, 'apikey'))
   let json = await res.json()*/
   let json = await fg.StickerSearch(text) 
    m.reply(`
❆ النتيجه

❋ *البحث:* ${json.title}
❋ *عدد الملصقات:* ${json.sticker_url.length}
❋ *وقت الشحن المقدر:* _*${json.sticker_url.length * 2} s*_`)
    for (let i of json.sticker_url) {
        const stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        //await delay(1500)
    }
    } catch (e) {
	m.reply(`❋ خطأ: جرب واحد اخر`)
	} 
}
handler.help = ['getsticker']
handler.tags = ['sticker']
handler.command = ['استيكر', 'ستيكر', 'stickersearch', 'sticksearch'] 
handler.diamond = ${premium}

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
