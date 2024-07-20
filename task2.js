const bodyElement = document.body;

const div = document.createElement("div");

div.className = "background";

bodyElement.appendChild(div)

// style to dive
div.style.backgroundImage = "url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg')";
div.style.backgroundSize = "cover";
div.style.height = "100vh"


const h1 = document.createElement("h1");
h1.className = "heading";
h1.innerHTML = "Chat"
div.appendChild(h1)


//  style to heading 

h1.style.color = "#ffffff"
h1.style.backgroundColor = "#323f4b";
h1.style.fontSize = "20px"
h1.style.textAlign = "center"
h1.style.fontFamily = "Roboto"
h1.style.fontWeight = "bold"
h1.style.padding = "14px"


const innerDiv = document.createElement("div");
innerDiv.className = "whole";
div.appendChild(innerDiv);

//  style to innerDiv
innerDiv.style.padding = "14px";
innerDiv.style.color = "#ffffff";
innerDiv.style.fontFamily = "Roboto";
innerDiv.style.fontSize = "12px";

const para = document.createElement("p");
para.innerHTML = "Hello, how are you?";
para.className = "text-sent";
innerDiv.appendChild(para)

// style to para 
para.style.backgroundColor = "#47a3f3";
para.style.padding = "12px";
para.style.borderTopLeftRadius = "12px"
para.style.borderTopRightRadius = "12px"
para.style.borderBottomLeftRadius = "12px"
para.style.borderBottomRightRadius = "12px"
para.style.textAlign = "right"


const para1 = document.createElement("p");
para1.innerHTML = "Hi Varakumar, I am good. How are you?";
para1.className = "text-rec";
innerDiv.appendChild(para1)


// style to para1 

para1.style.backgroundColor = "#52606d";
para1.style.padding = "12px";
para1.style.borderTopLeftRadius = "12px"
para1.style.borderTopRightRadius = "12px"
para1.style.borderBottomLeftRadius = "12px"
para1.style.borderBottomRightRadius = "12px"
para1.style.textAlign = "left"




const para2 = document.createElement("p");
para2.innerHTML = "I'm fine. I am learning HTML and CSS";
innerDiv.appendChild(para2)

// style to para2 

para2.style.backgroundColor = "#47a3f3";
para2.style.padding = "12px";
para2.style.borderTopLeftRadius = "12px"
para2.style.borderTopRightRadius = "12px"
para2.style.borderBottomLeftRadius = "12px"
para2.style.borderBottomRightRadius = "12px"
para2.style.textAlign = "left"



const para3 = document.createElement("p");
para3.innerHTML = "HTML and CSS?";
innerDiv.appendChild(para3)

//  style to para3 
para3.style.backgroundColor = "#52606d";
para3.style.padding = "12px";
para3.style.borderTopLeftRadius = "12px"
para3.style.borderTopRightRadius = "12px"
para3.style.borderBottomLeftRadius = "12px"
para3.style.borderBottomRightRadius = "12px"
para3.style.textAlign = "left"



const para4 = document.createElement("p");
para4.innerHTML = "Yes, by doing projects parallelly, i am learning ";
para4.className = "text-sent";
innerDiv.appendChild(para4)

// style to para4 

para4.style.backgroundColor = "#47a3f3";
para4.style.padding = "12px";
para4.style.borderTopLeftRadius = "12px"
para4.style.borderTopRightRadius = "12px"
para4.style.borderBottomLeftRadius = "12px"
para4.style.borderBottomRightRadius = "12px"
para4.style.textAlign = "right"



const para5 = document.createElement("p");
para5.innerHTML = "Awesome, can you tell how you are learning it ?";
para5.className = "text-rec"

innerDiv.appendChild(para5)

// style to para5 

para5.style.backgroundColor = "#52606d";
para5.style.padding = "12px";
para5.style.borderTopLeftRadius = "12px"
para5.style.borderTopRightRadius = "12px"
para5.style.borderBottomLeftRadius = "12px"
para5.style.borderBottomRightRadius = "12px"
para5.style.textAlign = "left"



const para6 = document.createElement("p");
para6.innerHTML = "Can i call you?";
para6.className = "text-sent";
innerDiv.appendChild(para6)

// style to para6 

para6.style.backgroundColor = "#47a3f3";
para6.style.padding = "12px";
para6.style.borderTopLeftRadius = "12px"
para6.style.borderTopRightRadius = "12px"
para6.style.borderBottomLeftRadius = "12px"
para6.style.borderBottomRightRadius = "12px"
para6.style.textAlign = "right"



