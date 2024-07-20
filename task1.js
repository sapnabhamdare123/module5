const bodyElement = document.body;

const div = document.createElement("div");

div.classList.add("background-image-class");

bodyElement.appendChild(div);

const heading = document.createElement("h1");

heading.innerHTML = "Todolist";
div.appendChild(heading)

heading.style.color = "red";

heading.style.textAlign = "center";

const para = document.createElement("p");

para.innerHTML = "Each day i will accomplish one thing on my todo list."

div.appendChild(para);

const heading4 = document.createElement("h4");
heading4.innerHTML = "Read Book";

heading4.style.color = "blue"

div.appendChild(heading4);


const para2 = document.createElement("p");

para2.innerHTML = "I don't think that the human race will surview the next thousand years,unless we spread into space. There are too many accidents that can befall life on a single planet. But i'm an optimist...";

div.appendChild(para2);

para2.style.fontSize = "30px"

para2.style.color = "deeppink";

// div.appendChild(heading);

let button = document.createElement("button");

button.innerHTML = "click me";

div.appendChild(button)

button.style.color = "red"
button.style.background = "yellow"

div.style.textAlign = "center";


const para3 = document.createElement("p");
para3.innerHTML = "Don't skip introduction"
div.appendChild(para3)

para3.style.color = "green"
para3.style.textDecoration = "underline"