nose_x=0;
nose_y=0;
function preload(){
    mustache_img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")

}
function setup(){
    console.log("inside_setup");
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posenet is intialized');
}

function draw(){
    image(video,0,0,300,300);
    image(mustache_img,nose_x-3,nose_y+3,25,25);
}



function take_sanpshot(){
    save("myFilterImage.png");
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x = " +nose_x);
        console.log("nose y = " +nose_y);
    }
}