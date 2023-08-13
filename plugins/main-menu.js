import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let username = conn.getName(who)

let str = `*مـرحــباً، مـعـك بـوت غــوجــو*

    ⌯    الـوقـت : 
    ⌯    الـتاريـخ : 


    〢━ 〄 مـعلومات الـبوت 〄 ━〢


    ⌯ اسـم الـبوت : غوجو
    ⌯ حط قبل كل امر :  .
    ⌯ اســم الـمطور : 𝐌𝐎_𝐘𝐓
    ⌯ البوت شغـال مـنذ : 
    ⌯ الـمنـصه : REPLIT


〢━ 〄 الـمفـيد 〄 ━〢


    ⌯
    ⌯
    ⌯
    ⌯
    ⌯
    ⌯
    ⌯
  

〢━ ⌬ الـمطـور فـقط ⌬ ━〢


    ⌯


〢━ ❅ الـجروبـات ❅ ━〢


    ⌯


〢 ━━ 🔍 الـبحـث 🔎 ━━━〢
    
       
    ⌯     
 
  
〢━ 📈 الـفلوس 📈 ━〢
  

    ⌯
  

〢━ 🎮 الـالـعاب 🎮 ━〢


    ⌯
   

〢━ 🛠️ الـتحـويل 🛠️ ━〢
   
    ⌯


〢━ ◈ الـصوتـيات ◈ ━〢


    ⌯
 

〢━ 📥 الـتـنزيـل 📥 ━〢
   
  
    ⌯     
  
   
〢━ 🎐 الـترفــيه 🎐 ━〢

    ⌯

                  *╭───── • ◈ • ─────╮*

*⋄ نـقابـة الـبوت : https://chat.whatsapp.com/BYcNmfA9dbzDddTFrsAdoc*
*⋄ رقـم الـمطـور :https://wa.me/+201206178781*

                  *╰───── • ◈ • ─────╯* `
    conn.sendFile(m.chat, `https://telegra.ph/file/c15fce842890d1eb01a37.jpg`, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react()

}
handler.help = ['perfil']
handler.tags = ['group']
handler.command = ['اوامر'] 

export default handler
