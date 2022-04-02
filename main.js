var moustacheX = 0;
var moustacheY = 0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/bJ7P2P4b/moustache-removebg-preview.png');
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded());
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
 console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    image(moustache, moustacheX, moustacheY, 30, 30);
}

function take_snapshot(){
save('myFilterImage.png');
}

function gotPoses(results)
{
 if(results.length > 0)
 {
    console.log(results);
    moustacheX = results[0].pose.moustache.moustacheX
    moustacheY = results[0].pose.moustache.moustacheY;
    console.log("moustache x = " + results[0].pose.moustache.x);
    console.log("moustache y = " + results[0].pose.moustache.y);

 }
}