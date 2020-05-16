import DraggableImage from "./draggableImage";
import imagesLoaded from 'imagesloaded';

function setDraggable(element){
    imagesLoaded(document.querySelectorAll(element), instance  => setDraggableLoaded(element));
}

function setDraggableLoaded(element){
    var elem = document.querySelector(element);
    var parent = elem.parentNode;
    parent.removeChild(elem);
    
    var wrap = document.createElement("div");
    wrap.classList.add('img-wrap');
    elem.classList.add('img-drag');
    wrap.appendChild(elem);
    parent.appendChild(wrap);

    new DraggableImage(wrap);
}

window.setDraggable = setDraggable;