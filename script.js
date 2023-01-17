console.log("welcome to spotify ")
//inilized the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
masterSongName
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Let Me Love You", filePath: "songs/0.mp3", coverPath: "covers/1.jpg" },
    { songName: "Koka - Diljit Dosanjh", filePath: "songs/1.mp3", coverPath: "covers/2.jpg" },
    { songName: " Adhi Raat - Jass Manak", filePath: "songs/2.mp3", coverPath: "covers/3.jpg" },
    { songName: "Hanji Hanji - Amrit Maan", filePath: "songs/3.mp3", coverPath: "covers/4.jpg" },
    { songName: "Laut Aana - Karan Aujla", filePath: "songs/4.mp3", coverPath: "covers/5.jpg" },
    { songName: "Summer High - Ap Dhillon", filePath: "songs/5.mp3", coverPath: "covers/6.jpg" },
    { songName: "Channa Ve", filePath: "songs/6.mp3", coverPath: "covers/7.jpg" },
    { songName: "nfgfgf", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "fgf", filePath: "songs/8.mp3", coverPath: "covers/7.jpg" },
    { songName: "gbvvbb", filePath: "songs/9.mp3", coverPath: "covers/2.jpg" },
]
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

//audioElement.play();
//handle play/paused click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to an event
audioElement.addEventListener('timeupdate', () => {
    //console.log('timeupdate');
    //update seeker
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //  console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
 

})