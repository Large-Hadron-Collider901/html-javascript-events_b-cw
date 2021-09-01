// select our input and label elements from the dom
let textArea = document.querySelector("input");
let label = document.querySelector("label");
// attach keydown event listener to the textarea
textArea.addEventListener("keydown", (evt) => {
  // add event obj to select anything written in the textarea
  let userText = evt.key; // store the text in a variable
  label.append(userText); // append the text to the label element
});
