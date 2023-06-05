let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let username = conn.getName(who)
let bv = `./src/mp3/${pickRandom([""])}.jpg`
let av = `./src/mp3/${pickRandom([""])}.mp3`

m.reply( `〖 قايمة القرآن الكريم 〗

←1. الفاتحه
←2. البقره
←3. ال عمران
←4. النساء
←5. المائده
←6. الانعام
←7. الاعراف
←8. الانفال
←9. التوبه
←10. يونس
←11. هود
←12. يوسف
←13. الرعد
←14. ابراهيم
←15. الحجر
←16. النحل
←17. الاسراء
←18. الكهف
←19. مريم
←20. طه
←21. الانبياء
←22. الحج
←23. المؤمنون
←24. النور
←25. الفرقان
←26. الشعراء
←27. النمل
←28. القصص
←29. العنكبوت
←30. الروم
←31. لقمان
←32. السجده
←33. الاحزاب
←34. سبأ
←35. فاطر
←36. يس
←37. الصافات
←38. ص
←39. الزمر
←40. غافر
←41. فصلت
←42. الشورى
←43. الزخرف
←44. الدخان
←45. الجاثيه
←46. الاحقاف
←47. محمد
←48. الفتح
←49. الحجرات
←50. ق
←51. الذاريات
←52. الطور
←53. النجم
←54. القمر
←55. الرحمان
←56. الواقعه
←57. الحديد
←58. المجادله
←59. الحشر
←60. الممتحنه
←61. الصف
←62. الجمعه
←63. المنافقون
←64. التغابن
←65. الطلاق
←66. التحريم
←67. الملك
←68. القلم
←69. الحاقه
←70. المعارج`)
conn.sendFile(m.chat, bv, 'picturejpg', null, m, true, { type: 'pictureMessage', ptt: true })
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}

handler.customPrefix = /^(قران|قرآن)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
