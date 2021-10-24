mustacheX=0;
mustacheY=0;
function preload(){
mustache = loadImage('https://i.postimg.cc/VLc074dp/Mustache.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results){
if(results.length> 0){
console.log(results);
mustacheX=results[0].pose.nose.x-8;
mustacheY=results[0].pose.nose.y-8;
console.log("mustache x = " + mustacheX);
console.log("mustache y = " + mustacheY);
}
}
function modelLoaded(){
console.log('poseNet is Initialized');
}
function draw(){
image(video, 0, 0, 300, 300);
image( mustache, noseX, noseY, 30, 30);
}
function takesnapshot(){
save("Mustache.png");
}