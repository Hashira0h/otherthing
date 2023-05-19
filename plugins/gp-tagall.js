let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`⧉ جروب : *${groupMetadata.subject}*\n⧉ عدد الاعضاء : *${participants.length}*${text ? `\n⧉ الرساله : ${text}\n` : ''}\n┌───⊷ *MENTIONS*\n` + users.map(v => '⤎ @' + v.replace(/@.+/, '')).join`\n` + '\n└──𒊹︎︎︎ sᴏғɪᴀ ᴮᴼᵀ 𒊹︎︎︎──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
