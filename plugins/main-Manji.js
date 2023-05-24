let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => m.reply(`
الاستماره بتاعت مانجي
`.trim())
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['استمارة_مانجي', 'مانجي'] 

export default handler
