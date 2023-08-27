
import fg from 'api-dylux'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let limit = 350
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `❖ مثال :\n${usedPrefix + command} https://youtu.be/pO5dgZrM9Mk`
    if (!args[0].match(/youtu/gi)) throw `❎ تاكد من ان الرابط من يوتيوب`import ytdl from 'ytdl-core';
import fs from 'fs';
import os from 'os';

let limit = 500;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `*✳️ مــثال:\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI*`;
  if (!args[0].match(/youtu/gi)) throw `*❎ تـأكـد أنـه رابـط مـن يـوتيـوب*`;

  let chat = global.db.data.chats[m.chat];
  m.react(rwait);
  try {
    const info = await ytdl.getInfo(args[0]);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
    if (!format) {
      throw new Error('No valid formats found');
    }

    if (format.contentLength / (1024 * 1024) >= limit) {
      return m.reply(`❒ *⚖️ الـمسـاحـه*: ${format.contentLength / (1024 * 1024).toFixed(2)}MB\n❒ *🎞️ الـجـوده*: ${format.qualityLabel}\n\n*❒ الـملـف تـجاوز حـد الـمساحــه* *+${limit} MB*`);
    }

    const tmpDir = os.tmpdir();
    const fileName = `${tmpDir}/${info.videoDetails.videoId}.mp4`;

    const writableStream = fs.createWriteStream(fileName);
    ytdl(args[0], {
      quality: format.itag,
    }).pipe(writableStream);

    writableStream.on('finish', () => {
      conn.sendFile(
        m.chat,
        fs.readFileSync(fileName),
        `${info.videoDetails.videoId}.mp4`,
        `*❖───┊ ♪ يــوتـــيــوب ♪ ┊───❖*
	  
	  *❏ الـعـنوان: ${info.videoDetails.title}*
	  *❐ الـمده: ${info.videoDetails.lengthSeconds} seconds*
	  *❑ الـمـشاهدات: ${info.videoDetails.viewCount}*
	  *❒ وقــت الـرفـع: ${info.videoDetails.publishDate}*
	  *❒ الـرابـط: ${args[0]}*`,
        m,
        false,
        { asDocument: chat.useDocument }
      );

      fs.unlinkSync(fileName); // Delete the temporary file
      m.react(done);
    });

    writableStream.on('error', (error) => {
      console.error(error);
      m.reply('*جـرب لاحـقاً !*');
    });
  } catch (error) {
    console.error(error);
    m.reply('*جـرب لاحـقاً !*');
  }
};

handler.help = ['ytmp4 <yt-link>'];
handler.tags = ['dl'];
handler.command = ['فيديو', 'video'];
handler.diamond = false;

export default handler;
