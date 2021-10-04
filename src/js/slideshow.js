var images = ['../Landing Challenge/src/images/slide1.png','../Landing Challenge/src/images/slide2.png','../Landing Challenge/src/images/slide3.png','../Landing Challenge/src/images/slide4.png','../Landing Challenge/src/images/slide5.png','../Landing Challenge/src/images/slide6.png','../Landing Challenge/src/images/slide7.png','../Landing Challenge/src/images/slide8.png'];

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