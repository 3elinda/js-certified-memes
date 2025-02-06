const btn1 = document.getElementById("cert-img-1");
const btn2 = document.getElementById("cert-img-2");
const btn3 = document.getElementById("cert-img-3");

const certificate1 = document.querySelector(".certificate1");
const certificate2 = document.querySelector(".certificate2");
const certificate3 = document.querySelector(".certificate3");

btn1.addEventListener("click", function () {
  console.log("jgj");
  certificate1.style.display = "block";
  certificate2.style.display = "none";
  certificate3.style.display = "none";
});

btn2.addEventListener("click", function () {
  certificate1.style.display = "none";
  certificate2.style.display = "block";
  certificate3.style.display = "none";
});

btn3.addEventListener("click", function () {
  certificate1.style.display = "none";
  certificate2.style.display = "none";
  certificate3.style.display = "block";
});

let date = new Date();
console.log(date);
