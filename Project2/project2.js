let count = 0;
const value = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    const singlebutton = e.currentTarget.classList;

    if (singlebutton.contains("decrease")) {
      count--;
    } else if (singlebutton.contains("increase")) {
      count++;
    } else if (singlebutton.contains("reset")) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});
