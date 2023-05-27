let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => m.reply(`
    const userChar = [
      "كورابيكا",
      "كاكاروت",
      "بلاك غوكو",
      "غابي",
      "غوجو عمكم",
      "ايتوشي رين عمكم",
      "اينوسكي",
      "جوكر",
      "باجي",
      "كازاتورا",
      "هانجي",
      "سانجي",
    ];
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)];

    let Mikutext = `*${userCharacterSeletion}*`;

.trim())
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['كتابة', 'كت'] 

export default handler
