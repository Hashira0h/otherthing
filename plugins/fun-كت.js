let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    if (!text) throw "*${userCharacterSeletion}*"
    const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
 const userChar = [
      "أراماكي",
      "أكاينو",
      "ألفونس إلريك",
      "ألن والكر",
      "أوبيتو أوتشيها",
      "أوروتشيمارو",
      "أوسوب",
      "أوكيجي",
      "غون فريكس",
      "ميوجين ياهيكو",
      "مونكي دي دراغون",
      "ماركو",
      "رانما ساوتومي",
      "كابتن كورو",
      "غوجو",
      "لوفي",
      "اينوسكي",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `*${userCharacterSeletion}*`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(كت)/i

export default handler 
