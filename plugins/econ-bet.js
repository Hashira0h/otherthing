let confirm = {}

async function handler(m, { conn, args }) {
    //if (!isROwner) throw 'Dalam perbaikan'
    if (m.sender in confirm) throw 'انت لا تزال في الجيم، انتظر حتى ينتهي'
    try {
        let user = global.db.data.users[m.sender]
        let count = (args[0] && number(parseInt(args[0])) ? Math.max(parseInt(args[0]), 1) : /all/i.test(args[0]) ? Math.floor(parseInt(user.money)) : 1) * 1
        if ((user.money * 1) < count) return m.reply('نقودك ليست كافيه !!')
        if (!(m.sender in confirm)) {
            confirm[m.sender] = {
                sender: m.sender,
                count,
                timeout: setTimeout(() => (m.reply('انتهى الوقت'), delete confirm[m.sender]), 60000)
            }
            let txt = `هل انت متأكد بانك تريد ان تراهن (Y/n)\n\n*
            رهان:* ${count} 💹\n⏰ 60s انتهى`
            return conn.sendButton(m.chat, txt, author, null, [['✔️'], ['✖️']], m)
        }
    } catch (e) {
        console.error(e)
        if (m.sender in confirm) {
            let { timeout } = confirm[m.sender]
            clearTimeout(timeout)
            delete confirm[m.sender]
            m.reply('مرفوض')
        }
    }
}

handler.before = async m => {
    if (!(m.sender in confirm)) return
    if (m.isBaileys) return
    let { timeout, count } = confirm[m.sender]
    let user = global.db.data.users[m.sender]
    let moneyDulu = user.money * 1
    let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()
    try {
        if (/^(✔️|y(es|a))?$/i.test(txt)) {
            let Bot = (Math.ceil(Math.random() * 91)) * 1
            let you = (Math.floor(Math.random() * 71)) * 1
            let status = 'lost'
            if (Bot < you) {
                user.money += count * 1
                status = 'win'
            } else if (Bot > you) {
                user.money -= count * 1
            } else {
                status = 'seri'
                user.money += (Math.floor(count / 1.5)) * 1
            }
            m.reply(`
            | *اللاعبون* | *النقاط* |
            * البوت:*      ${Bot}
            *انت:*    ${you}
            انت *${status}*, انت ${status == 'فزت' ? `حصلت على *+${count * 2}*` : status == 'خسرت' ? `خسرت *-${count * 1}*` : `حصلت على *+${Math.floor(count / 1.5)}*`} نقود 💹
                `.trim())
            clearTimeout(timeout)
            delete confirm[m.sender]
            return !0
        } else if (/^(✖️|لا)?$/i.test(txt)) {
            clearTimeout(timeout)
            delete confirm[m.sender]
            m.reply('مرفوض')
            return !0
        }

    } catch (e) {
        clearTimeout(timeout)
        delete confirm[m.sender]
        if (moneyDulu > (user.money * 1)) user.money = moneyDulu * 1
        m.reply('خطأ اثناء الرهان (مرفوض)')
        return !0
    } finally {
        clearTimeout(timeout)
        delete confirm[m.sender]
        return !0
    }
}

handler.help = ['judi [jumlah]']
handler.tags = ['rpg']
handler.command = /^(رهان|bet)$/i

export default handler

/**
 * Detect if thats number
 * @param {Number} x 
 * @returns Boolean
 */
function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
}
