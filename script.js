const bodyElement = document.body

const div = document.createElement("div");

bodyElement.appendChild(div);

const heading  = document.createElement("h2");

const para = document.createElement("p");

para.innerHTML = "lorem what i do here becuase paragraph is not comming here so ";

heading.textContent = "hello sapna";

div.appendChild(heading);

div.appendChild(para)