//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ The welcome message is configured')
  } else throw `❒ أدخل رسالة الترحيب\n\n@المستخدم (منشن)\n@جروب (اسم الجروب)\n@وصف (الوصف بتاع الجروب)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
