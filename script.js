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

// Obtén referencias a tus elementos de imagen
const playImage = document.createElement('img');
playImage.src = 'play-azul.png';

const stopImage = document.createElement('img');
stopImage.src = 'stop-azul.png';

// Agrega un evento de clic al elemento de imagen (puede ser una etiqueta <div> o <button>)
play.addEventListener('click', function () {
    if (isPlay) {
        // Si está reproduciendo, establece la imagen de "play"
        play.innerHTML = ''; // Limpia cualquier contenido existente
        play.appendChild(playImage);
        clearInterval(timer);
    } else {
        // Si no está reproduciendo, establece la imagen de "stop"
        play.innerHTML = ''; // Limpia cualquier contenido existente
        play.appendChild(stopImage);
        tick();
        timer = setInterval(tick, (60 * 1000) / currentBpm);
    }
    isPlay = !isPlay;
});





// ...

bpmSubtraction.addEventListener('click', function () {    
    let currentBpm = parseInt(bpmDisplay.innerHTML);     
    let newBpm = currentBpm - 1;
    currentBpm = newBpm
    if (isPlay) {
        clearInterval(timer);
        timer = setInterval(tick, (60 * 1000) / currentBpm);
    }
    bpmDisplay.innerHTML = newBpm;    
    bpm.value = newBpm; // Cambia el valor del rango
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
    bpm.value = newBpm; // Cambia el valor del rango
});

