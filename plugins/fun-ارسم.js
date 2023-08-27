import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*هذا الامر يحول الكلام الى صوره*\n\n*مــثال*\n*◉ ${usedPrefix + command} Ronaldo*\n*◉ ${usedPrefix + command} Messi*`;

  try {
    m.reply('*جـــاري تـــحضـيــر الـصور !*');

    const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}&model=art`;
    const response = await fetch(endpoint);
    const data = await response.json();

    if (data.result && Array.isArray(data.result)) {
      for (let i = 0; i < Math.min(data.result.length, 2); i++) {
        const imageUrl = data.result[i];
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.buffer();
        await conn.sendFile(m.chat, imageBuffer, null, null, m);
      }
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    throw '*جــرب لاحــقا*';
  }
};

handler.command = ['ارسم'];
export default handler;
