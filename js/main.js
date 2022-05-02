let left_arrow = document.getElementById('left-arrow');
let right_arrow = document.getElementById('right-arrow');

let scroll_container = document.getElementById("slider");

let card = document.getElementsByClassName("card");

let size = card[1].clientWidth;

scroll_container.onscroll = ()=>{
    left_arrow.style.visibility = 'visible';
    right_arrow.style.visibility = 'visible';
    
    if(scroll_container.scrollLeft == 0)
        left_arrow.style.visibility = 'hidden';

    if(scroll_container.scrollLeft >= scroll_container.scrollLeftMax)
        right_arrow.style.visibility = 'hidden';
}

let init_scroll = function(){
    if(scroll_container.scrollLeft <= (size * 2))
        left_arrow.style.visibility = 'hidden';
}

init_scroll();

left_arrow.addEventListener('click',()=>{
    scroll_container.scrollLeft -= size;
});

right_arrow.addEventListener('click',()=>{
    scroll_container.scrollLeft += size;
});

