var images = ['gallery/01.jpg','gallery/02.jpg','gallery/03.jpg','gallery/04.jpg'];
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