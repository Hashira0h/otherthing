
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./src/mp3/${pickRandom(["Guru", "Guru1", "Guru2", "Guru3", "Guru4"])}.mp3`

m.reply( `مرحبا ${taguser}\nاكتب قبل كل امر [.]

▢ ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‎
Ⓟ = Premium
ⓓ = Diamonds
-----  -----  -----  -----  -----
  ❖ *جميع الاوامر* ❖

┌─⊷ *ABOUT*
▢ .blocklist
▢ .info
▢ .owner
▢ .donate
▢ .gpguru
▢ .listprem
▢ .help
▢ .audios
▢ .ping
▢ .runtime
└───────────

┌─⊷ *GAMES*
▢ .dado
▢ .delttt
▢ .Math <mode>
▢ .ppt <stone/paper/scissors>
▢ .slot <gamble>
▢ .tictactoe <tag Someone>
└───────────

┌─⊷ *LEVELS AND ECO*
▢ .adddi <@user>
▢ .addxp <@user>
▢ .balance
▢ .daily
▢ .leaderboard
▢ .levelup
▢ .mine
▢ .rob
▢ .buy
▢ .buyall
▢ .transfer [tip] [amount] [@tag]
▢ .work
└───────────

┌─⊷ *REGISTER*
▢ .reg <name.age>
▢ .mysn
▢ .unreg <Num Serie>
└───────────

───⊷ *الملصقات* ⊷────
ه❒ .attp <text>
❒ .مكس <ايموجي+ايموجي>
❒ .ملصق
❒ .لصوره
❒ .لفيديو
❒ .تريجر @المستخدم
ه❒ .ttp <text>
❒ .سرقة <الاسم الاول>|<الاسم الثاني>
└───────────

───⊷ *الصور* ⊷───
ه❒ .meme (ⓓ)
❒ .بينتيرست
❒ .خلفية
└───────────

┌─⊷ *MAKER*
▢ .logololi (ⓓ)
▢ .neon (ⓓ)
▢ .devil (ⓓ)
▢ .wolf (ⓓ)
▢ .phlogo (ⓓ)
└───────────

┌─⊷ *PREMIUM*
▢ .gdrive (ⓓ) (Ⓟ)
▢ .mediafire <url> (ⓓ)
└───────────

───⊷ *جروب* ⊷───
❒ .ضيف
❒ .حذف
❒ .حذف_تحذير
❒ .اعفاء (منشن)
❒ .الجروب
❒ .مخفي
❒ .دعوه <الرقم>
❒ .طرد (منشن)
❒ .لينك
❒ .بروفايل
❒ .ترقية
❒ .تغيير_اللينك
ه❒ .setbye <text>
ه❒ .setwelcome <text>
❒ .محاكاة <الكلمه> @المستخدم
❒ .المشرفين
❒ .منشن
❒ .لمنشن
❒ .انئار @المستخدم
❒ .الانذارات
└───────────

┌─⊷ *EN/DISABLE OPTIONS*
▢ .enable <option>
▢ .disable <option>
└───────────

────⊷ *تعبيرات انمي* ⊷────
❒ .قتل
❒ .بوس
❒ .تربيتي
❒ .ضرب
└───────────

┌─⊷ *DOWNLOADERS*
▢ .facebook <url> (ⓓ)
▢ .gdrive (ⓓ) (Ⓟ)
▢ .gitclone <url> (ⓓ)
▢ .igstalk
▢ .instagram <link ig> (ⓓ)
▢ .mediafire <url> (ⓓ)
▢ .play
▢ .play2
▢ .tiktok (ⓓ)
▢ .tiktokstalk
▢ .twitter <url> (ⓓ)
▢ .ytmp3 <url> (ⓓ)
▢ .ytsearch
▢ .ytmp4 <link yt> (ⓓ)
└───────────

┌─⊷ *TOOLS*
▢ .cal <equation>
▢ .google (ⓓ)
▢ .lyrics
▢ .readmore <text1>|<text2>
▢ .ssweb <url> (ⓓ)
▢ .tourl
▢ .trad <leng> <text>
▢ .tts <lang> <teXTSs>
▢ .wikipedia
└───────────

┌─⊷ *FUN*
▢ .afk <razon>
▢ .tomp3
▢ .toav
▢ .gay @user
▢ .pregunta
▢ .bot
└───────────

┌─⊷ *DATABASE*
▢ .listcmd
▢ .setcmd <txt>
└───────────

┌─⊷ *OWNER*
▢ .expired <days>
▢ .addprem <@tag>
▢ .banchat
▢ .listban
▢ .ban @user
▢ .tx
▢ .cleartmp
▢ .delexpired
▢ .delprem @user
▢ .getplugin <name file>
▢ .getfile <name file>
▢ .join <chat.whatsapp.com> <dias>
▢ .reset <54xxx>
▢ .restart
▢ .unbanchat
▢ .unban @user
▢ .update
└───────────

┌─⊷ *ADVANCED*
▢ >
▢ =>
▢ $
└───────────  
 `)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(بوت|ميكاسا)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
