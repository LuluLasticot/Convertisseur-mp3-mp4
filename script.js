document.addEventListener('DOMContentLoaded', () => {
    const youtubeUrlInput = document.getElementById('youtube-url');
    const downloadLinkSection = document.getElementById('download-link');
    const thumbnailImage = document.getElementById('thumbnail');
    const audioQualitySelect = document.getElementById('audio-quality');
    const videoResolutionSelect = document.getElementById('video-resolution');
    const convertYoutubeMp3Button = document.getElementById('convert-youtube-mp3');
    const convertVimeoMp3Button = document.getElementById('convert-vimeo-mp3');
    const convertDailymotionMp3Button = document.getElementById('convert-dailymotion-mp3');
    const convertYoutubeMp4Button = document.getElementById('convert-youtube-mp4');
    const convertVimeoMp4Button = document.getElementById('convert-vimeo-mp4');
    const convertDailymotionMp4Button = document.getElementById('convert-dailymotion-mp4');

    const getThumbnailUrl = (url) => {
        let videoId;
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=| Shorts\/))([a-zA-Z0-9_-]+)/)?.[1];
            return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : '';
        } else if (url.includes("vimeo.com")) {
            // Placeholder for Vimeo thumbnail logic
            return '';
        } else if (url.includes("dailymotion.com")) {
            // Placeholder for Dailymotion thumbnail logic
            return '';
        }
        return '';
    };

    youtubeUrlInput.addEventListener('input', () => {
        const thumbnailUrl = getThumbnailUrl(youtubeUrlInput.value);
        thumbnailImage.src = thumbnailUrl;
    });

    convertYoutubeMp3Button.addEventListener('click', () => {
        const videoUrl = youtubeUrlInput.value;
        const audioQuality = audioQualitySelect.value;
        const downloadLink = document.createElement('a');
        downloadLink.href = '#';
        downloadLink.textContent = `Télécharger MP3 (YouTube, ${audioQuality}kbps)`;
        downloadLink.download = `youtube_audio_${Date.now()}_${audioQuality}kbps.mp3`;
        downloadLinkSection.innerHTML = '';
        downloadLinkSection.appendChild(downloadLink);
    });

    convertVimeoMp3Button.addEventListener('click', () => {
        const videoUrl = youtubeUrlInput.value;
        const audioQuality = audioQualitySelect.value;
        const downloadLink = document.createElement('a');
        downloadLink.href = '#';
        downloadLink.textContent = `Télécharger MP3 (Vimeo, ${audioQuality}kbps)`;
        downloadLink.download = `vimeo_audio_${Date.now()}_${audioQuality}kbps.mp3`;
        downloadLinkSection.innerHTML = '';
        downloadLinkSection.appendChild(downloadLink);
    });

    convertDailymotionMp3Button.addEventListener('click', () => {
        const videoUrl = youtubeUrlInput.value;
        const audioQuality = audioQualitySelect.value;
        const downloadLink = document.createElement('a');
        downloadLink.href = '#';
        downloadLink.textContent = `Télécharger MP3 (Dailymotion, ${audioQuality}kbps)`;
        downloadLink.download = `dailymotion_audio_${Date.now()}_${audioQuality}kbps.mp3`;
        downloadLinkSection.innerHTML = '';
        downloadLinkSection.appendChild(downloadLink);
    });

    convertYoutubeMp4Button.addEventListener('click', () => {
        const videoUrl = youtubeUrlInput.value;
        const videoResolution = videoResolutionSelect.value;
        const downloadLink = document.createElement('a');
        downloadLink.href = '#';
        downloadLink.textContent = `Télécharger MP4 (YouTube, ${videoResolution})`;
        downloadLink.download = `youtube_video_${Date.now()}_${videoResolution}.mp4`;
        downloadLinkSection.innerHTML = '';
        downloadLinkSection.appendChild(downloadLink);
    });

    convertVimeoMp4Button.addEventListener('click', () => {
        const videoUrl = youtubeUrlInput.value;
        const videoResolution = videoResolutionSelect.value;
        const downloadLink = document.createElement('a');
        downloadLink.href = '#';
        downloadLink.textContent = `Télécharger MP4 (Vimeo, ${videoResolution})`;
        downloadLink.download = `vimeo_video_${Date.now()}_${videoResolution}.mp4`;
        downloadLinkSection.innerHTML = '';
        downloadLinkSection.appendChild(downloadLink);
    });

    convertDailymotionMp4Button.addEventListener('click', () => {
        const videoUrl = youtubeUrlInput.value;
        const videoResolution = videoResolutionSelect.value;
        const downloadLink = document.createElement('a');
        downloadLink.href = '#';
        downloadLink.textContent = `Télécharger MP4 (Dailymotion, ${videoResolution})`;
        downloadLink.download = `dailymotion_video_${Date.now()}_${videoResolution}.mp4`;
        downloadLinkSection.innerHTML = '';
        downloadLinkSection.appendChild(downloadLink);
    });
});
