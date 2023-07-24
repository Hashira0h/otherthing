let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => m.reply(`
لسه ما انضافت
`.trim())
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['ا', 'اوامر'] 

export default handler
