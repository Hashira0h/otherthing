
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️Enter the Username of a TikTok user `
  let res = await fg.ttStalk(args[0])
  let txt = `
┐────【 *تيك توك* 】
□ *🔖الاسم:* ${res.name}
□ *🔖اسم المستخدم:* ${res.username}
□ *👥عدد المتابعين:* ${res.followers}
□ *🫂يتابع:* ${res.following}
□ *📌الوصف:* ${res.desc}

□ *🔗 الرابط* : https://tiktok.com/${res.username}
└──────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|تيكتوك2)$/i

export default handler
