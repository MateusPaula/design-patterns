const AudioPlayer = require('./AudioPlayer');
const VideoPlayer = require('./VideoPlayer');

class VideoPlayerAdapter extends AudioPlayer{
    constructor() {
        super();
        this.videoPlayer = new VideoPlayer();
    }

    playAudio(filename) {
        console.log('Adaptador em ação: usando o videoplayer')
        this.videoPlayer.playMedia(filename);
    }
}

module.exports = VideoPlayerAdapter;