import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
	if (!text) throw `*ادخل الشيء الذي تريد ان تبحث عنه* !` 
	
    try {
	const link =  await axios.get(`https://es.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`☘️ *ويكيبيديا*

‣ Buscado : ${wik}

${resulw}`)
} catch (e) {
  m.reply('⚠️ لم نجد شيئاً !')
}
}
handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = ['ويكي','ويكيبيديا'] 


export default handler
