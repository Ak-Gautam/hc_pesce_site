
var images = ['01.jpg','02.jpg','03.jpg','04.jpg'];
var i =0;

function slideShow() {
    document.getElementById("image").src=images[i];
    if(i<images.length-1){
        i++;
    }
    else {
        i=0;
    }

    setTimeout("slideShow()" , 2000);

}

window.onload = slideShow;