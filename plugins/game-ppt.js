//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `⚫ اختار حجر/ورقه/مقص\n\nمثال : *${usedPrefix + command}* ورقه\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'حجر'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'مقص'
    } else {
        astro = 'ورقه'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`✦ *تعادل*\n\n▧ انت : ${text}\n▧ صوفيا : ${astro}\n\n🎁 النقاط (±)100 اكس بي`)
    } else if (text == 'حجر') {
        if (astro == 'مقص') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`✦ *فزت* 🎊\n\n▧ انت : ${text}\n▧ صوفيا : ${astro}\n\n🎁 نقاط *+${poin} اكس بي*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`✦ *خسرت*\n\n▧ انت : ${text}\n▧ صوفيا : ${astro}\n\n النقاط *-${poin} اكس بي*`)
        }
    } else if (text == 'مقص') {
        if (astro == 'ورقه') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`✦ *فزت* 🎊\n\n▧ انت : ${text}\n▧ صوفيا : ${astro}\n\n🎁 النقاط *+${poin} اكس بي*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`✦ *lost*\n\n▧ انت : ${text}\n▧ صوفيا : ${astro}\n\nالنقاط *-${poin} اكس بي*`)
        }
    } else if (text == 'ورقه') {
        if (astro == 'حجر') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`✦ *فزت* 🎊\n\n▧ انت : ${text}\n▧ صوفيا : ${astro}\n\n🎁 النقاط *+${poin} اكس بي*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`✦ *انت خسرت*\n\n▧ انت : ${text}\n▧ صوفيا : ${astro}\n\nالنقاط *-${poin} اكس بي*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt <rock/paper/scissors>']
handler.tags = ['game']
handler.command = ['يد'] 
handler.register = false

export default handler
