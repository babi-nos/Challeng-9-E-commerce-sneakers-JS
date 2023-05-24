const imgs = document.querySelectorAll(".imgs-min");
const firstImg = document.querySelector(".firstimg");
const firstImg2 = document.querySelector(".firstimg2");
const zoom = document.querySelectorAll(".zoom");
const containerZoom = document.querySelector(".container-zoom");
// const flou = document.querySelector(".flou");

for (let i = 0; i < imgs.length; i++) {
  let img = imgs[i];
  img.classList.add(`image-${i}`);
  displayImg(img);
}

function displayImg(img) {
  img.addEventListener("click", () => {
    imgs.forEach((activeimg) => {
      activeimg.classList.remove("active");
    });

    img.classList.add("active");

    if (img.classList[1] === "image-0" || img.classList[1] === "image-4") {
      firstImg.innerHTML = `
          <img id="fistImg"  class="zoom" src="/images/image-product-1.jpg" alt="">
          `;
      firstImg2.innerHTML = `
          <img id="fistImg" src="/images/image-product-1.jpg" alt="">
          `;
    } else if (
      img.classList[1] === "image-1" ||
      img.classList[1] === "image-5"
    ) {
      firstImg.innerHTML = `
          <img id="fistImg"  class="zoom" src="/images/image-product-2.jpg" alt="">
          `;
      firstImg2.innerHTML = `
          <img id="fistImg" src="/images/image-product-2.jpg" alt="">
          `;
    } else if (
      img.classList[1] === "image-2" ||
      img.classList[1] === "image-6"
    ) {
      firstImg.innerHTML = `
          <img id="fistImg" class="zoom"  src="/images/image-product-3.jpg" alt="">
          `;
      firstImg2.innerHTML = `
          <img id="fistImg" src="/images/image-product-3.jpg" alt="">
          `;
    } else if (
      img.classList[1] === "image-3" ||
      img.classList[1] === "image-7"
    ) {
      firstImg.innerHTML = `
          <img id="fistImg" class="zoom" src="/images/image-product-4.jpg" alt="">
          `;
      firstImg2.innerHTML = `
          <img id="fistImg"   src="/images/image-product-4.jpg" alt="">
          `;
    }
  });
}

firstImg.addEventListener("click", () => {
  containerZoom.style.display = "block";

});

containerZoom.addEventListener('click', function(event) {
  if (!event.target.matches('.image-4, .image-5, .image-6, .image-7, #fistImg')) {
    containerZoom.style.display = "none";
  }
});

// document.body.addEventListener("click", () => {
//     containerZoom.style.display = "none";
//   });