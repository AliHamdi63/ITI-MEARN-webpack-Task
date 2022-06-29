import './style.scss';
import photo from '../../assets/4.jpg'

function component() {
    const element = document.createElement("div");
    const header = document.createElement("h2");
    const image = document.createElement("img");
    
    image.src = photo;
    image.style.width = "40%"
    
    header.innerHTML = "Ali Hamdi";
    
    element.appendChild(header);
    element.appendChild(image);

    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());