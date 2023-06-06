
let handler = async (m, { conn }) => {
	
	await conn.fetchBlocklist().then(async data => {
		let txt = `*≡ List *\n\n*Total :* ${data.length}\n\n┌─⊷\n`
		for (let i of data) {
			txt += `➹ @${i.split("@")[0]}\n`
		}
		txt += "╝════〖 ه 〗════╚"
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw 'مفيش ارقام متبلكه'
	})
}

handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['blocklist', 'المتبلكين'] 

export default handler
