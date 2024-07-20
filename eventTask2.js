function switchoff() {
    let btn = document.getElementById("offswitch");
    // btn.style.backgroundColor = "green"
    if (btn.style.backgroundColor === "red") {
        btn.style.backgroundColor = "#cbd2d9";
    } else {
        btn.style.backgroundColor = "red";
    }


    let Lightimage = document.getElementById("lightimage")
    Lightimage.src = "photos/offLight.png"

   let Catimage = document.getElementById("catimage");
   Catimage.src = "photos/darkCat.png"

   let p = document.getElementById("switchstatus");
   p.textContent = "switched off"

}


function switchon(){
    let btn2 = document.getElementById("onswitch");
    // btn2.style.backgroundColor = "green"
    if (btn2.style.backgroundColor === "red") {
        btn2.style.backgroundColor = "green";
    } else {
        btn2.style.backgroundColor = "red";
    }

    let lightImage = document.getElementById("lightimage");
    lightImage.src = "photos/onLIght.png"

    let catImage = document.getElementById("catimage");
    catImage.src = "photos/whiteCat.png"

    let p = document.getElementById("switchstatus");
    p.textContent = "switched on"




}