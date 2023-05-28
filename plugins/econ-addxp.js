//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '❅ منشن الشخص'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '❅ أدخل مقدار *الاكس بي* تريد أن تضيف'
  if (isNaN(txt)) throw ' 🔢 ارقام فقط 🔢'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '❅ الحد الادني  *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`*تم اضافة الاكس بي ✔*
───────✧ه⇩ه✧───────
❅   *المجموع:* ${xp}
───────✧ه⇧ه✧───────`)
 conn.fakeReply(m.chat, `❅ لقد استلمت \n\n *+${xp} اكس بي*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['ضيف_اكس بي'] 
handler.rowner = true

export default handler

