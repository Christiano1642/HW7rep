const button = document.querySelector("button");
const p = document.querySelector("p");

p.textContent = "Hello World";
//  TODO: listen for a 'click' on the 'button'
button.addEventListener("click", function () {
  console.log("click");
});

// TODO: when there is a click change the 'p' tag to say...
