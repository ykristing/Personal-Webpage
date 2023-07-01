var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}


preloadImages("monstera1.png", "proj-imgs/audio.png", "proj-imgs/msp.png", "proj-imgs/nelson-fp.png", "proj-imgs/socioeconomic.png");
