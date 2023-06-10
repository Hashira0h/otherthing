let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    if (!text) throw "منشن الشخص الذي تريد معرفة شخصيته"
    const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
 const userChar = [
      "سيجما",
      "كريم",
      "غبي",
      "صبور",
      "خاين",
      "حيوان",
      "سيمب",
      "لطيف",
      "قليل الادب",
      "نسونجي",
      "محترم",
      "مفيش منه اتنين",
      "ذكي",
      "خجول",
      "تافه",
      "مز/ه",
      "كيوت",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `شخصية @${mentionedUser.split("@")[0]}  هي *${userCharacterSeletion}* 🔥⚡`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(شخصية)/i

export default handler 
