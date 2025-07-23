let currentSong = 0;

const music=document.querySelector('#audio');
const songname =document.querySelector('.song-name');
const musicslider=document.querySelector('.music-slider');
const seekbar=document.querySelector('.seek-bar');
const currenttime=document.querySelector('.current-time');
const musictime=document.querySelector('.music-time');
const controls=document.querySelector('.controls');
const btnback=document.querySelector('.btnback');
const btnplay=document.querySelector('.btn-play');
const btnnext=document.querySelector('.btnnext');

btnplay.addEventListener('click',()=>{
    if(btnplay.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }
    btnplay.classList.toggle('pause');
});

//setup musics
const setSong=(i)=>{
    seekbar.value=0;
    let song=songs[i];
    currentSong=i;
    music.src=song.path;
    songname.innerHTML=song.name;

    currenttime.innerHTML='00:00';
    setTimeout(()=>{
        seekbar.max=music.duration;
        musictime.innerHTML =formatTimes(music.duration);
    }, 300);
}

setSong(0);

const formatTimes=(time)=>{
    let min=Math.floor(time / 60);
    if(min<10){
        min=`0${min}`;
    }
    let sec=Math.floor(time % 60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return `${min}:${sec}`;
}

// Set seek bar
setInterval(() => {
    seekbar.value=music.currentTime;
    currenttime.innerHTML=formatTimes(music.currentTime);
    if(Math.floor(music.currentTime)==Math.floor(seekbar.max)){
        btnnext.click();
    }
}, 500);

seekbar.addEventListener('change',()=>{
    music.currentTime=seekbar.value;
});

const playMusic=()=>{
    music.play();
    btnplay.classList.remove('pause');
}


btnnext.addEventListener('click',()=>{
    if(currentSong>=songs.length-1){
        currentSong=0;
    }else{
        currentSong++;
    }
    setSong(currentSong);
    playMusic();
}); 

btnback.addEventListener('click',()=>{
    if(currentSong<=0){
        currentSong=songs.length-1;
    }else{
        currentSong--;
    }
    setSong(currentSong);
    playMusic();
}); 

