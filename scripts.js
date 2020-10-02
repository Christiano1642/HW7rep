const button = document.querySelector("button");
const p = document.querySelector("p");

//  TODO: listen for a 'click' on the 'button'
button.addEventListener("click", function () {
  console.log("click");
  p.textContent = "Hello World";
});

// TODO: when there is a click change the 'p' tag to say...
