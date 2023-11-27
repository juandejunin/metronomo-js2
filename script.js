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

play.addEventListener('click', function () {
    if (isPlay) {
        play.innerHTML = 'play'
        clearInterval(timer)
    } else {
        play.innerHTML = 'stop'
        tick()
        timer = setInterval(tick, (60 * 1000) / currentBpm)
    }
    isPlay = !isPlay
})




bpmSubtraction.addEventListener('click', function () {    
    let currentBpm = parseInt(bpmDisplay.innerHTML);     
    let newBpm = currentBpm - 1;
    currentBpm = newBpm
    if (isPlay) {
        clearInterval(timer)
        timer = setInterval(tick, (60 * 1000) / currentBpm)    }
    bpmDisplay.innerHTML = newBpm ;    
});

bpmAddition.addEventListener('click', function () {    
    let currentBpm = parseInt(bpmDisplay.innerHTML);     
    let newBpm = currentBpm  + 1;
    currentBpm = newBpm
    if (isPlay) {
        clearInterval(timer)
        timer = setInterval(tick, (60 * 1000) / currentBpm)    }
    bpmDisplay.innerHTML = newBpm ;    
});
