import '../styles/style.scss';

const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const images = document.getElementsByClassName("imagesToDisplay");
let selected = null;

Array.prototype.forEach.call(images, (i) => {
    i.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = i.src;
        //alert("clicked");
    });
})

popup.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)';
})

