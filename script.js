//here we use the build in eval function we take
// the string input and evaluate it eval("2+2") output ==>4
const input = document.querySelector("#input");
const buttons = document.querySelectorAll("button");
///to create an array;

// const array = Array.from(buttons);
let string = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
