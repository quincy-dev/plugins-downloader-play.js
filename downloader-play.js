const { google } = require('googleapis');
const axios = require('axios');

let handler = async (m, { conn, text }) => {
    if (!text || text.trim() === "") {
        return m.reply(`*Contoh Penggunaan:*\n.play judul_lagu`);
    }

    const youtube = google.youtube({
        version: 'v3',
        auth: 'YOUR_GOOGLE_API_KEY', // Gantilah dengan API Key Google Anda
    });

    try {
        // Pencarian video YouTube
        const res = await youtube.search.list({
            part: 'snippet',
            q: text,
            maxResults: 1,
            type: 'video',
        });

        if (!res.data.items.length) {
            return m.reply('Audio tidak ditemukan. Silakan coba kata kunci lain.');
        }

        const video = res.data.items[0];
        const videoId = video.id.videoId;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const title = video.snippet.title;
        const thumbnail = video.snippet.thumbnails.high.url;

        // Mendapatkan detail video (views, likes)
        const details = await youtube.videos.list({
            part: 'statistics',
            id: videoId,
        });

        const stats = details.data.items[0].statistics;
        const views = stats.viewCount || 'Tidak tersedia';
        const likes = stats.likeCount || 'Tidak tersedia';

        m.reply(`🔍 *Hasil Pencarian:*\n\n◦ *Judul*: ${title}\n◦ *URL*: ${videoUrl}\n◦ *Views*: ${views}\n◦ *Likes*: ${likes}\n`);

        m.reply('Sedang download audio, tunggu sebentar...');

        // Mendownload audio menggunakan API baru
        const apiRes = await axios.get(`https://api.siputzx.my.id/api/dl/youtube/mp3?url=${encodeURIComponent(videoUrl)}`);
        const result = apiRes.data;

        if (!result.status || !result.data) {
            return m.reply('Gagal mendapatkan audio. Pastikan URL video benar atau coba lagi nanti.');
        }

        // URL download audio
        const audioUrl = result.data;

        // Kirimkan audio
        await conn.sendFile(m.chat, audioUrl, `${title}.mp3`, '', m, false, {
            mimetype: 'audio/mp3',
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: '',
                    thumbnailUrl: thumbnail,
                    sourceUrl: videoUrl,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        });

        m.reply('✅ Audio berhasil dikirim!');
    } catch (e) {
        console.error('Error:', e.message || e);
        m.reply(`Terjadi kesalahan: ${e.response?.data?.message || e.message || 'Server error'}`);
    }
};

handler.command = handler.help = ['play', 'song', 'ds'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;

module.exports = handler;
