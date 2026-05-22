const images = [

    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg"
];

let currentIndex = 0;


const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");


function openLightbox(index){

    currentIndex = index;

    lightbox.style.display = "flex";

    lightboxImg.src = images[currentIndex];
}


function closeLightbox(){

    lightbox.style.display = "none";
}


function changeSlide(direction){

    currentIndex += direction;

    if(currentIndex >= images.length){

        currentIndex = 0;
    }

    if(currentIndex < 0){

        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex];
}


function filterImages(category){

    let images = document.querySelectorAll(".gallery-item");

    images.forEach(function(image){

        if(category === "all"){

            image.style.display = "block";
        }

        else if(image.classList.contains(category)){

            image.style.display = "block";
        }

        else{

            image.style.display = "none";
        }
    });
}


document.addEventListener("keydown", function(event){

    if(lightbox.style.display === "flex"){

        if(event.key === "ArrowRight"){

            changeSlide(1);
        }

        else if(event.key === "ArrowLeft"){

            changeSlide(-1);
        }

        else if(event.key === "Escape"){

            closeLightbox();
        }
    }
});