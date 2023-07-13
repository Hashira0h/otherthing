let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat] 
     if (/^اوامر$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `الاستماره`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 

return !0 }
export default handler
