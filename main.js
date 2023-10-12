let song;

function preload() {
  song = loadSound("music.mp3");
}

let scoreRightWrist = 0;
let scoreLeftWrist = 0;
let rightWristX = 0;
let rightWristY = 0;
let leftWristX = 0;
let leftWristY = 0;

function setup() {
  let canvas = createCanvas(450, 475);
  canvas.parent("canvasContainer"); // Colocando o canvas dentro do container
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
  console.log("canvas");
}

function modelLoaded() {
  console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    scoreRightWrist = results[0].pose.keypoints[10].score;
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log(
      "scoreRightWrist = " +
        scoreRightWrist +
        " scoreLeftWrist = " +
        scoreLeftWrist
    );
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log(
      "rightWristX = " + rightWristX + " rightWristY = " + rightWristY
    );
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
  }
}

// Adicionando a função play
function play() {
  if (song.isLoaded()) {
    song.play();
  } else {
    alert(
      "A música ainda está carregando. Aguarde um momento e tente novamente."
    );
  }
}
