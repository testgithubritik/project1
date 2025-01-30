const slider = document.querySelector('.slider');
const slides = document.querySelector('.slide');
let currentindex = 0;

function showslide (index) {
    if (index < 0){
        currentindex =slides.length -1;
    }
    else if (index >= slides.length){
        currentindex =0
    }
    const offset = -currentindex * 100;
    slider.style.transform ='translateX(${offset}%)';
}

function nextslide (){
    currentindex++;
    showslide(currentindex);

}

function prevslide(){
    currentindex--;
    showslide(currentindex);
}

