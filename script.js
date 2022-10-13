const playBtn = document.getElementById("playbtn");

var audioTrack = WaveSurfer.create({
    container: '.audio',
    waveColor: 'lightgray',
    progressColor: 'red',
    barWidth: '3',
    height: 90,
    barRadius: 2,
    responsive: true
});

audioTrack.load('track.MP3');

playBtn.addEventListener("click", ()=>{
    audioTrack.playPause();
    playBtn.classList.toggle("fa-play")
    playBtn.classList.toggle("fa-pause")
});

audioTrack.on('finish', ()=>{
    playBtn.classList.add("fa-play")
    
})