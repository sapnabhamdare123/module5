const bodyElement = document.body;

const div = document.createElement("div");
div.className = "box";
bodyElement.appendChild(div);



const div2 = document.createElement("div");
div2.className = "box2";
div.appendChild(div2);


const heading = document.createElement("h1");
heading.className = "heading";
heading.innerHTML = "Happy Meals"
div2.appendChild(heading)


const h3 = document.createElement("h3");
h3.className = "heading3";
h3.innerHTML = "Discover the best foods over the 1,000 restaurants";
div2.appendChild(h3)





const btn = document.createElement("button")
btn.innerHTML = "Book Now"
btn.className = "btn"
div2.appendChild(btn)
