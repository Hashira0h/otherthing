import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let userChar = [
      "غوجو",
      "Generous",
      "Grumpy",
      "Overconfident",
      "Obedient",
      "Good",
      "Simp",
      "Kind",
      "Patient",
      "Pervert",
      "Cool",
      "Helpful",
    ];
const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)];
  let res = await (await fetch('*${userCharacterSeletion}*'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
m.reply(`${indo}\n\n${character}\n${anime}`)
}
handler.help = ['animequote']
handler.tags = ['internet']
handler.command = /^(katanime|مقولة)$/i

export default handler
