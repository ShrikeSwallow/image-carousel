import imgOne from "./images/one.webp";
import imgTwo from "./images/two.webp";
import imgThree from "./images/three.webp";
import imgFour from "./images/four.webp";
import imgFive from "./images/five.webp";

export default class Carousel {
  generateCarousel = () => {
    const slides = document.querySelector(".slides");
    const images = [imgOne, imgTwo, imgThree, imgFour, imgFive];
    images.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image;
      slides.appendChild(img);
    });
  };
}
