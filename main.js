
Webcam.set({
width: 350,
height:300,
image_format:'png',
png_quality: 90,
force_flash: true
});

camera= document.getElementById("camera");
Webcam.attach('#camera');

function Take_Snapshot(){

Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
});

}

console.log('ml5 version:', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qYl9vYaMy/model.json',modelLoaded);

function modelLoaded(){

console.log('modelLoaded');

}