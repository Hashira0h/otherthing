let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => m.reply(` 
〖 أوامر التنزيل 〗
╗══ه══════════════
╣◇ حط قبل أي أمر 【.】
╝══ه══════════════

◯ فيسبوك
◯ درايف
◯ انستغرام
◯ انستا
◯ ميديافاير
◯ شغل
◯ شغل2
◯ سبوتيفاي
◯ تيكتوك
◯ تيكتوك2
◯ تويتر
◯ اغنية
◯ بحث
◯ فيديو

╗══ه══════════════
╣◇ اكتب الامر بالحرف الواحد
╝══ه══════════════`.trim())
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['اوامر_التنزيل'] 

export default handler
