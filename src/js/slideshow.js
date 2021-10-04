var images = ['./src/images/slide1.png','./src/images/slide2.png','./src/images/slide3.png','./src/images/slide4.png','./src/images/slide5.png','./src/images/slide6.png','./src/images/slide7.png','./src/images/slide8.png'];

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