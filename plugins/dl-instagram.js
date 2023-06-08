
import fetch from 'node-fetch'
import instagramGetUrl from 'instagram-url-direct'
import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `*هذا الامر لتحميل الفيديوهات من الانستغرام، مثال: ${usedPrefix + command}* https://www.instagram.com/p/CtCsbQKr2k4/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==` 
try {
await m.reply(`*جاري تحميل الفيديو، انتظر قلبلا...*`)
switch (command) {        
case "instagramdl": case "instagram": case "انستا": case "ig": 
let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json = await human.json()
let videoig = json.result
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt1 = `🔗 *الرابط:* ${shortUrl1}`.trim()
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m)
break  
case "instagramdl2": case "instagram2": case "انستا2": case "ig2":        
const resultss = (await instagramGetUrl(args[0])).url_list[0]
let shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt2 = `🔗 *الرابط:* ${shortUrl2}`.trim()
conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m)
break               
case "instagramdl3": case "instagram3": case "انستا3": case "ig3":            
const resultssss = await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0])).catch(async _ => await instagramdlv3(args[0])).catch(async _ => await instagramdlv4(args[0]))
let shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${r.medias[i].url}`)).text()
let txt3 = `🔗 *الرابط:* ${shortUrl3}`.trim()
for (const { url } of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m)
break       
}} catch {
await await m.reply(`*اريور ! (${usedPrefix}انستا, ${usedPrefix}انستا2, ${usedPrefix}انستا3)*`)
}}
handler.command = /^(instagramdl|instagram|انستا|ig|instagramdl2|instagram2|انستا2|ig2|instagramdl3|instagram3|انستا3|ig3)$/i
export default handler
