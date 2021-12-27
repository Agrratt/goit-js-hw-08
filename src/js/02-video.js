import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const CUREENT_TIME = 'current-time'
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate',
  throttle(() => {
  player.getCurrentTime().then(sec => {
    localStorage.setItem(CUREENT_TIME, JSON.stringify(sec));
    console.log(sec)
  });
}, 1000),
);

const videoStart = JSON.parse(localStorage.getItem(CUREENT_TIME));
player.setCurrentTime(videoStart);
