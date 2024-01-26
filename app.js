let num = document.querySelector("#number");
let counter = 0;
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter++;
    num.innerHTML = `${counter}%`;
  }
}, 30);
