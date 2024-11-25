import imgOne from "./images/one.webp";
import imgTwo from "./images/two.webp";
import imgThree from "./images/three.webp";
import imgFour from "./images/four.webp";
import imgFive from "./images/five.webp";

export default class Carousel {
  constructor() {
    this.images = [imgOne, imgTwo, imgThree, imgFour, imgFive];
  }
  generateCarousel = () => {
    const slides = document.querySelector(".slides");
    const navigationButtons = document.querySelector(".navigation-buttons");
    this.images.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image;
      slides.appendChild(img);
      const button = document.createElement("button");
      button.classList.add(`button-${index}`);
      navigationButtons.appendChild(button);
    });
  };
  startCarousel = () => {
    const slides = document.querySelector(".slides");
    const navigationButtons = document.querySelectorAll(
      ".navigation-buttons button"
    );
    this.images.forEach((image, index) =>
      setTimeout(() => {
        // Main body of the array
        // Edge Case: start of array
        if (index === 0) {
          slides.classList.add(`slides-${index}`);
          slides.classList?.remove(`slides-${this.images.length - 1}`);
        }
        if (index > 0) {
          slides.classList.add(`slides-${index}`);
          slides.classList?.remove(`slides-${index - 1}`);
        }

        navigationButtons.forEach((navigationButton) => {
          navigationButton.classList.remove("button-active");
          if (navigationButton.classList.contains(`button-${index}`))
            navigationButton.classList.add("button-active");
        });
        // Edge Case: end of array
        /*if (index === this.images.length - 1) {
          slides.classList.add(`slides-${index}`);
          slides.classList?.remove(`slides-${this.images.length - 1}`);
        }*/
      }, 2000 * index)
    );
  };
}
