//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

let disc = m.sender.substring(3, 7)
			let textr = "";
            if (pushName) {
             textr += `*${pushName}#${disc}'s* Exp\n\n`
			} else {
				textr += `*${m.sender}#${disc}'s* Exp\n\n`
			}
			textr += `*🎯️XP*: ${userq.xp} / ${Levels.xpFor(userq.level + 1)}\n*❤️Level*: ${userq.level}\n*🔮️Role*: ${role}`
 catch {
                    pppuser = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                    ppuser=await fetchBuffer(pppuser)

                }
                const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                const randomHexz = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`

			                const rank = new canvacord.Rank()
                    .setAvatar(ppuser)
                    .setLevel(userq.level)
                    .setLevelColor(randomHexs, randomHex)
                    .setCurrentXP(userq.xp)
                    .setOverlay(randomHex, 100, false)
                    .setRequiredXP(Levels.xpFor(userq.level + 1))
                    .setProgressBar(randomHexs, 'COLOR')
				    .setRank(0, role, false)
                    .setBackground('COLOR', randomHexz)
                    .setUsername(pushName)
                    .setDiscriminator(disc)
    }
}

