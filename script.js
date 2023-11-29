const bpm = document.getElementById('bpm')
const bpmDisplay = document.getElementById('bpmDisplay')
const play = document.getElementById('play')
const audio = document.getElementById('clap')


const bpmSubtraction = document.getElementById('bpmSubtraction')
const bpmAddition = document.getElementById('bpmAddition')

let currentBpm = 40
let isPlay = false
let timer = null
function tick() {
    audio.currentTime = 0
    audio.play()
}
bpm.addEventListener('change', function () {
    bpmDisplay.innerHTML = this.value
    currentBpm = parseInt(this.value)
    if (isPlay) {
        clearInterval(timer)
        timer = setInterval(tick, (60 * 1000) / currentBpm)
    }
})

const playImage = document.createElement('img');
playImage.src = './img/play-azul.png';

const stopImage = document.createElement('img');
stopImage.src = './img/stop-azul.png';


play.addEventListener('click', function () {
    if (isPlay) {       
        play.innerHTML = ''; 
        play.appendChild(playImage);
        clearInterval(timer);
    } else {       
        play.innerHTML = ''; 
        play.appendChild(stopImage);
        tick();
        timer = setInterval(tick, (60 * 1000) / currentBpm);
    }
    isPlay = !isPlay;
});


bpmSubtraction.addEventListener('click', function () {    
    let currentBpm = parseInt(bpmDisplay.innerHTML);     
    let newBpm = currentBpm - 1;
    currentBpm = newBpm
    if (isPlay) {
        clearInterval(timer);
        timer = setInterval(tick, (60 * 1000) / currentBpm);
    }
    bpmDisplay.innerHTML = newBpm;    
    bpm.value = newBpm;
});

bpmAddition.addEventListener('click', function () {    
    let currentBpm = parseInt(bpmDisplay.innerHTML);     
    let newBpm = currentBpm + 1;
    currentBpm = newBpm
    if (isPlay) {
        clearInterval(timer);
        timer = setInterval(tick, (60 * 1000) / currentBpm);
    }
    bpmDisplay.innerHTML = newBpm;    
    bpm.value = newBpm; 
});

