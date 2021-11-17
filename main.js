song = "" ;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    song = loadSound("music.mp3");
}

function draw(){
    Image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
}