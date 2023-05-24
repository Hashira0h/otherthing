
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('تم اعادة الرابط بنجاح\n\n📌 اللينك الجديد:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['revoke', 'تغيير_اللينك', 'اعادة_الرابط'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
