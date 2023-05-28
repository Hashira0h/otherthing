let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n♕ ')
    m.reply(`⧉ جروب : *${groupMetadata.subject}*\n⧉ عدد الاعضاء : *${participants.length}*${text ? `\n⧉ الرساله : ${text}\n` : ''}\nالمشرفين : ${listAdmin}\n───⊷ *المنشن الجماعي* ⊷───\n` + users.map(v => 'ه♡⇠ @' + v.replace(/@.+/, '')).join`\n` + '\n└──☆ sᴏғɪᴀ ᴮᴼᵀ ☆──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
