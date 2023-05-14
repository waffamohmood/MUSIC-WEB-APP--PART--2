dancemonkey="";
stealmygirl="";
function preload(){
    dancemonkey=loadSound("dancemonkey.mp3");
    stealmygirl=loadSound("stealmygirl.mp3");
}
function setup(){
    canvas=createCanvas(500,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}