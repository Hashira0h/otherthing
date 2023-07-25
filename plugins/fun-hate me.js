let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = m.sender
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`ليش بتكرهه يا ${toM(b)}`, null, {
        mentions: [a, b]
    })
}
handler.help = ['ship']
handler.tags = ['fun']
handler.command = ['بيكرهني']

handler.group = true

export default handler
