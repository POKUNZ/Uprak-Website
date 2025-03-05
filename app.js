const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "LENOVO LOQ",
    price: 15999000,
    img: "./img/lENOVOLOQ.png",
  },
  {
    id: 2,
    title: "ASUS ROG",
    price: 17899000,
    img: "./img/ROGSTRIX-removebg-preview.png",
  },
  {
    id: 3,
    title: "ACER ASPIRE",
    price: 8699000,
    img: "./img/ACERASPIRE-removebg-preview.png",
  },
  {
    id: 4,
    title: "DELL INSPIRON",
    price: 10899000,
    img: "./img/DELLINSPIRON-removebg-preview.png",
  },
  {
    id: 5,
    title: "HP VICTUS",
    price: 12499000,
    img: "./img/HP-removebg-preview.png",
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");


currentProductTitle.textContent = choosenProduct.title;
currentProductPrice.textContent = "Rp " + choosenProduct.price.toLocaleString("id-ID");
currentProductImg.src = choosenProduct.img;


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

  
    choosenProduct = products[index];

    
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rp " + choosenProduct.price.toLocaleString("id-ID");
    currentProductImg.src = choosenProduct.img;
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
