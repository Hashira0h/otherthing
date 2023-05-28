//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 *وضع النوم* 
هفضل نايم لحد ما تبعت رساله تاني 
❏ *المستخدم:* ${conn.getName(m.sender)} 
❏ *السبب:* ${text ? text : ''}
  `)
}
handler.help = ['afk <razon>']
handler.tags = ['fun']
handler.command = ['نام']
handler.group = true

export default handler
