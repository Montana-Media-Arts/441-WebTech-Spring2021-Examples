$(document).ready(function(){
    $("#audiochange").click(function(){
        updateAudio();
    });

    $("#videochange").click(function(){
        updateVideo();
    });
});


function updateAudio()
{
    $("#song").attr("src", "Schubert.mp3"); 
}

function updateVideo()
{
    $("#film").attr("src", "Cat.mp4");
}


