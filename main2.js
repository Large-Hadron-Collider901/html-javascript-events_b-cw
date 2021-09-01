// create the default string
const codeCrewString =
  " Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness";
// select our input and label elements from the dom
let textArea = document.querySelector("input");
let label = document.querySelector("label");
let index = 0; // start index at 0
// attach keydown event listener to the textarea
textArea.addEventListener("keydown", (evt) => {
  index++; // increment the index count with each keystroke

  // when the user presses a key, replace the letter with a letter from our string
  let userText = evt.key; // create a variable to store the text entered by the user
  let split = codeCrewString.split(""); // split the string by each individual character and store in new array
  userText = split; // replace each character the user types with a character from our string
  let replace = split[index]; // store the output of our string's index
  label.append(replace); // append the output to the label element
});
