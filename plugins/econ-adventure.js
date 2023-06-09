const cooldown = 300000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 80) return m.reply(`
يجب ان يكون لديك على الاقل 80 ❤️صحه للقيام ب مغامره!!
يرجى شراء ❤️الصحه اولا بكتابة *${usedPrefix}اشتري potion <quantity>*,
و اكتب *${usedPrefix}heal <quantity>* لاستخدام الpotion
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
لقد قمت بمغامرة بالفعل، انتظر!! *🕐${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = 'لقد قمت بمغامره و خسرت'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\nBut you got'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastadventure = new Date * 1
}
handler.help = ['adventure', 'petualang', 'berpetualang', 'mulung']
handler.tags = ['rpg']
handler.command = /^(adventure|مغامره|مغامرة)$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            الفلوس: 201,
            الاكسبي: 301,
            نفايه: 101,
            جرعة: 2,
            صخر: 2,
            خشب: 2,
            خيط: 2,
            شائع: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            غير_مألوف: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            أسطوري: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            أسطوري: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            حديد: [0, 0, 0, 1, 0, 0],
            ذهب: [0, 0, 0, 0, 0, 1, 0],
            جواهر: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4
        }
    }
    return rewards
}
