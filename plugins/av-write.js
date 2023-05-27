let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./src/mp3/${pickRandom(["Guru", "Guru1", "Guru2", "Guru3", "Guru4"])}.mp3`
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
      "هانجي",

m.reply( `*${userCharacterSeletion}*`)

handler.customPrefix = /^(كتابة|كت)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
