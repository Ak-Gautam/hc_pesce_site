var images = ['gallery/01.png','gallery/02.png','gallery/03.png','gallery/04.png','gallery/05.jpg','gallery/06.png','gallery/07.png'];
var i =0;

function slideShow() {
    document.getElementById("image").src=images[i];
    if(i<images.length-1){
        i++;
    }
    else {
        i=0;
    }

    setTimeout("slideShow()" , 3000);

}

window.onload = slideShow;