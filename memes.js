const btn1 = document.getElementById("cert-img-1");
const btn2 = document.getElementById("cert-img-2");
const btn3 = document.getElementById("cert-img-3");
const fillFormBtn = document.getElementById("form-btn");

const certificate1 = document.querySelector(".certificate1");
const certificate2 = document.querySelector(".certificate2");
const certificate3 = document.querySelector(".certificate3");
const form = document.querySelector(".form-sect");

let chosen = certificate1;

btn1.addEventListener("click", function () {
  certificate1.style.display = "block";
  certificate2.style.display = "none";
  certificate3.style.display = "none";
  form.style.display = "none";
  chosen = certificate1;
});

btn2.addEventListener("click", function () {
  certificate1.style.display = "none";
  certificate2.style.display = "block";
  certificate3.style.display = "none";
  form.style.display = "none";
  chosen = certificate2;
});

btn3.addEventListener("click", function () {
  certificate1.style.display = "none";
  certificate2.style.display = "none";
  certificate3.style.display = "block";
  form.style.display = "none";
  chosen = certificate3;
});

fillFormBtn.addEventListener("click", function () {
  certificate1.style.display = "none";
  certificate2.style.display = "none";
  certificate3.style.display = "none";
  form.style.display = "block";
});

const fillForm = document.querySelector(".form");

fillForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputName = document.getElementById("name").value;
  const inputIssuedBy = document.getElementById("issuedby").value;
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  inputInserts(inputName, inputIssuedBy, day, month, year);
});

function inputInserts(inputName, inputIssuedBy, day, month, year) {
  const winners = document.querySelectorAll(".winner");
  winners.forEach((winner) => {
    winner.innerHTML = inputName;
  });
  const allPresentedBy = document.querySelectorAll(".presented-by");
  allPresentedBy.forEach((presentedBy) => {
    presentedBy.innerHTML = inputIssuedBy;
  });
  const currentDates = document.querySelectorAll(".on-this-day");
  currentDates.forEach((currentDate) => {
    currentDate.innerHTML = `${month}/ ${day}/ ${year}`;
  });
  chosen.style.display = "block";
  form.style.display = "none";
  printButton.style.display = "block";
}

const printButton = document.getElementById("print-btn");
printButton.addEventListener("click", function () {
  window.print();
});
