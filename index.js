const imgs = document.querySelectorAll(".imgs-min");
const firstImg = document.querySelector(".firstimg");
const firstImg2 = document.querySelector(".firstimg2");
const zoom = document.querySelectorAll(".zoom");
const containerZoom = document.querySelector(".container-zoom");
const container = document.querySelector(".container");
const shop = document.querySelector(".shop");
const user = document.querySelector(".userAvatar");
const more = document.querySelector(".more");
const less = document.querySelector(".less");
const egal = document.querySelector(".egale");
const add = document.querySelector(".btnShop");
const panier = document.querySelector(".howMany");
const achat = document.querySelector(".achat");
const hideIfAchat = document.querySelector(".hideIfAchat");

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

    if (
      img.classList.contains("image-0") ||
      img.classList.contains("image-4")
    ) {
      const targetImgs = document.querySelectorAll(".image-0, .image-4");

      targetImgs.forEach((targetImg) => {
        targetImg.classList.add("active");
      });

      firstImg.innerHTML = `
        <img id="fistImg" class="zoom" src="/images/image-product-1.jpg" alt="">
      `;
      firstImg2.innerHTML = `
        <img id="fistImg" src="/images/image-product-1.jpg" alt="">
      `;
    } else if (
      img.classList.contains("image-1") ||
      img.classList.contains("image-5")
    ) {
      const targetImgs = document.querySelectorAll(".image-1, .image-5");

      targetImgs.forEach((targetImg) => {
        targetImg.classList.add("active");
      });
      firstImg.innerHTML = `
          <img id="fistImg"  class="zoom" src="/images/image-product-2.jpg" alt="">
          `;
      firstImg2.innerHTML = `
          <img id="fistImg" src="/images/image-product-2.jpg" alt="">
          `;
    } else if (
      img.classList.contains("image-2") ||
      img.classList.contains("image-6")
    ) {
      const targetImgs = document.querySelectorAll(".image-2, .image-6");

      targetImgs.forEach((targetImg) => {
        targetImg.classList.add("active");
      });
      firstImg.innerHTML = `
          <img id="fistImg"  class="zoom" src="/images/image-product-3.jpg" alt="">
          `;
      firstImg2.innerHTML = `
          <img id="fistImg" src="/images/image-product-3.jpg" alt="">
          `;
    } else if (
      img.classList.contains("image-3") ||
      img.classList.contains("image-7")
    ) {
      const targetImgs = document.querySelectorAll(".image-3, .image-7");

      targetImgs.forEach((targetImg) => {
        targetImg.classList.add("active");
      });
      firstImg.innerHTML = `
          <img id="fistImg"  class="zoom" src="/images/image-product-4.jpg" alt="">
          `;
      firstImg2.innerHTML = `
          <img id="fistImg" src="/images/image-product-4.jpg" alt="">
          `;
    }
  });
}

// caculer le painer et l'incrementé

let number = 0;

function calcShop(x, y) {
  if (x === "less") {
    number--;
    egal.textContent = number;

    if (number === -1) {
      number = 0;
      egal.textContent = number;
    }
    if (number >= 1) {
    }
  } else if (y === "more") {
    number++;
    egal.textContent = number;

    if (number >= 1) {
    }
  }
}

function addShop() {
  if (egal.textContent === "0") {
    panier.textContent = ``;
    panier.style.opacity = 0;
    shop.innerHTML = ` 
    <h3>Cart</h3>
    <p class="hideIfAchat">You cart is empty</p>
    <div class="achat">
    </div>
    `;
  } else {
    const egalNumber = egal.textContent;
    panier.textContent = `${egalNumber}`;
    panier.style.opacity = 1;
    const calcAchat = egalNumber * 125.0;

    hideIfAchat.style.display = "none";
    shop.innerHTML = ` 
    <h3>Cart</h3>

    <div class="achat">
     <img src="/images/image-product-1-thumbnail.jpg" alt="Image de sneakers">

        <h4>Fall Limited Edition Sneakers 125.00 x ${egalNumber} <span class="shop-price">   
        ${calcAchat}$</span></h4>

        <svg id="delete" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
    </div>
    <button class="btnCheckOut">Checkout</button>
    `;

    const deleteSvg = document.getElementById("delete");
    deleteSvg.addEventListener("click", () => {
      egal.textContent = 0;
      addShop();
      number = 0;
    });
  }
}

add.addEventListener("click", () => {
  addShop();
});

less.addEventListener("click", (e) => {
  const x = e.target.classList[0];
  calcShop(x, null);
});

more.addEventListener("click", (e) => {
  const y = e.target.classList[0];
  calcShop(null, y);
});

firstImg.addEventListener("click", function (event) {
  if (event.target.matches("#fistImg")) {
    containerZoom.style.display = "block";
  }
});
containerZoom.addEventListener("click", function (event) {
  if (
    !event.target.matches(".image-4, .image-5, .image-6, .image-7, #fistImg")
  ) {
    containerZoom.style.display = "none";
  }
});

user.addEventListener("click", () => {
  shop.classList.toggle("shop");
  shop.classList.toggle("shopReveal");

  if (shop.classList.contains("shopReveal")) {
    container.addEventListener("click", () => {
      shop.classList.remove("shopReveal");
      shop.classList.add("shop");
    });
  }
});


