let input = document.getElementById("number");
let check = document.querySelector(".check");
let info = document.querySelector(".info");
let attempt = document.querySelector(".attempt");
let downNum = document.querySelector(".downNum");
let upNum = document.querySelector(".upNum");

let counter = 9;

check.addEventListener("click", () => {
  counter--;
  attempt.innerHTML = `Number of attempts: ${counter}`;
});

let randomNumber = Math.round(Math.random() * 100);

input.addEventListener("click", () => {
  input.value = "";
});

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    // console.log(event);
    event.preventDefault();
    document.querySelector(".check").click();
  }
});

check.addEventListener("click", (e) => {
  let number = input.value;
  // console.log(number)
    console.log(randomNumber);
  if (number < 0 || number >= 100) {
    info.innerHTML = "Enter a number between 1 - 100";
    check.style.display = "none";
    input.style.display = "none";
    info.style.display = "200px";
  } else {
    if (number == randomNumber && counter >= 0) {
      info.innerHTML = "Congratulations you found the number :)";
      check.style.display = "none";
      input.style.display = "none";
      info.style.display = "200px";
    }
    else if (number > randomNumber && counter > 0) {
      info.innerHTML = "Enter a smaller number..";
      upNum.innerHTML = input.value;
    } else if (number < randomNumber && counter > 0) {
      info.innerHTML = "Enter a larger number..";
      downNum.innerHTML = input.value;
    } else {
      info.innerHTML = "Unfortunately you lost";
      attempt.innerHTML = `Number :${randomNumber} <br> Number of attempts: ${counter}`;
      check.style.display = "none";
      input.style.display = "none";
      info.style.color = "red";
      info.style.fontSize = "40px";
    }
  }
});
