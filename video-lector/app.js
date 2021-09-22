let video = document.querySelector('.video');
let timer = document.querySelector('.time-bar');
let btn = document.getElementById('play-pause');
let muteBtn = document.getElementById('mute');
let volumeslider = document.getElementById('volumeSlider');
let bar = document.querySelector('.main-bar');

function togglePlayPause() 
{

    if (video.paused)
    {
        btn.className="pause";
        video.play();
    }
    else 
    {
        btn.className = "play";
        video.pause();
    }

}

// play and pause
btn.onclick = function()
{
    togglePlayPause();
}

// duration time event


video.addEventListener('timeupdate', function()
{

    let juicePos = video.currentTime / video.duration;

    timer.style.width = juicePos * 100 + '%';

    if (video.ended) 
    {
        btn.className ="play";
    }

})




// mute la video

muteBtn.addEventListener('click', function()
{
    if (video.muted)
    {
        video.muted = false;
        muteBtn.innerHTML = "Mute";
    }
    else
    {
        video.muted = true;
        muteBtn.innerHTML = "Unmute";
    }
})


// volume line

volumeslider.addEventListener('change', function()
{
    video.volume = volumeslider.value / 100;
})


// bar clickable


let ret = bar.getBoundingClientRect();
console.log(ret);


let myWidth = ret.width;
bar.addEventListener("click", function(event)
{
    // valeur du click sur x par rapport a notre element
    let x = event.clientX - ret.left;
    let widthPercent = ((x * 100) / myWidth);
    let currentTimeTrue = (widthPercent * 173) / 100;
    // position en secondes
    video.currentTime = currentTimeTrue;
    timer.style.width = widthPercent + '%';
})
