import Player from "@vimeo/player";
console.log("Player", Player)
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const SAVE_TIME = 'videoplayer-current-time';
// ****************************************************
    const onPlay = function(data) {
        
           localStorage.setItem(SAVE_TIME, JSON.stringify(data));         
        
        // data is an object containing properties specific to that event
    };
    
    player.on('timeupdate', onPlay);
    
      // console.log('play', onPlay);
// Начало времени воспроизведения**********************
player.setCurrentTime(SAVE_TIME).then(function(seconds) {
    // seconds = the actual time that the player seeked to

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});