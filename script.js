// get references
let pButton = document.getElementById("p_button");
let imgButton = document.getElementById("img_button");
let nothingButton = document.getElementById("nothing_button");
let pDiv = document.getElementById("p_div");
let imgDiv = document.getElementById("img_div");
let nothingDiv = document.getElementById("nothing_div");
let pCountRef = document.getElementById("p_count");
let imgCountRef = document.getElementById("img_count");
let nothingCountRef = document.getElementById("nothing_count");

// declare variables
let pCount = 0;
let imgCount = 0;
let nothingCount = 0;

pDiv.style.display = "block";
imgDiv.style.display = "none";
nothingDiv.style.display = "none";

// set up onclick function for pButton
pButton.onclick = function() {
    // show/hide elements
    pDiv.style.display = "block";
    imgDiv.style.display = "none";
    nothingDiv.style.display = "none";

    // create newPElement
    let newPElement = document.createElement("p");
    newPElement.innerHTML = "Hellooooo";
    newPElement.style.backgroundColor = "black";
    newPElement.style.color = "white";
    newPElement.style.padding = "10px";
    
    // add newPElement to pDiv
    pDiv.appendChild(newPElement);

    // increase pCount by 1
    pCount++;

    // change innerHTML of pCountRef
    pCountRef.innerHTML = "pCount: " + pCount;
}

// set up onclick function for imgButton
imgButton.onclick = function() {
    // show/hide elements
    pDiv.style.display = "none";
    imgDiv.style.display = "block";
    nothingDiv.style.display = "none";

    // create newImgElement
    let newImgElement = document.createElement("img");
    newImgElement.src = "images/pikachu.png";
    newImgElement.style.width = "150px";
    
    // add newImgElement to imgDiv
    imgDiv.appendChild(newImgElement);

    // increase imgCount by 1
    imgCount++;

    // change innerHTML of imgCountRef
    imgCountRef.innerHTML = "imgCount: " + imgCount;
}

// set up onclick function for nothingButton
nothingButton.onclick = function() {
    // show/hide elements
    pDiv.style.display = "none";
    imgDiv.style.display = "none";
    nothingDiv.style.display = "block";

    // increase nothingCount by 1
    nothingCount++;

    // change innerHTML of nothingCountRef
    nothingCountRef.innerHTML = "nothingCount: " + nothingCount;
}