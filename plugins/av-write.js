let handler = async (m, { conn}) => {
 const userChar = [
      "غابي",
      "غوجو",
      "ايتوشي رين",
      "كورابيكا",
      "دوفلامينغو",
      "كازاتورا",
      "موراساكيبارا",
      "باغي",
      "هيسوكا",
      "كيلوا",
      "غون",
      "هانجي" ];

m.reply( `*${userCharacterSeletion}*`)

handler.customPrefix = /^(كتابة|كت)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
