lipsX=0;
lipsY=0;

function preload()
{
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotpose)
}
function draw()
{
    image(video,0,0,300,300)
    image(lipstick,lipsX,lipsY,30,30)
}
function take_snapshot()
{
    save('realtime_filter');
}
function modelloaded()
{
    console.log("poseNet is initilized")
}
function gotpose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipsX = results[0].pose.nose.x-15
        lipsY = results[0].pose.nose.y-15+30
        console.log(" lips x = " + lipsX);
        console.log(" lips y = " + lipsY);
    }
}