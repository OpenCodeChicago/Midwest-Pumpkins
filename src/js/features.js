document.getElementById("first-featured-item").addEventListener("mouseover", mouseOverFirst);
document.getElementById("first-featured-item").addEventListener("mouseout", mouseOutFirst);

function mouseOverFirst(){  
    document.getElementById("first-featured-item").style.display = "none";
    document.getElementById("first-featured-item-details").style.display = "block";
}

function mouseOutFirst(){
    document.getElementById("first-featured-item").style.display = "block";
    document.getElementById("first-featured-item-details").style.display = "none";
}

//

document.getElementById("second-featured-item").addEventListener("mouseover", mouseOverFirstSecond);
document.getElementById("second-featured-item").addEventListener("mouseout", mouseOutSecond);

function mouseOverFirstSecond(){
    document.getElementById("second-featured-item").style.display = "none";
    document.getElementById("second-featured-item-details").style.display = "block";
}

function mouseOutSecond(){
    document.getElementById("second-featured-item").style.display = "block";
    document.getElementById("second-featured-item-details").style.display = "none";
}

//

document.getElementById("third-featured-item").addEventListener("mouseover", mouseOverThird);
document.getElementById("third-featured-item").addEventListener("mouseout", mouseOutThird);

function mouseOverThird(){
    document.getElementById("third-featured-item").style.display = "none";
    document.getElementById("third-featured-item-details").style.display = "block";
}

function mouseOutThird(){
    document.getElementById("third-featured-item").style.display = "block";
    document.getElementById("third-featured-item-details").style.display = "none";
}

//

document.getElementById("fourth-featured-item").addEventListener("mouseover", mouseOverFourth);
document.getElementById("fourth-featured-item").addEventListener("mouseout", mouseOutFourth);

function mouseOverFourth(){
    document.getElementById("fourth-featured-item").style.display = "none";
    document.getElementById("fourth-featured-item-details").style.display = "block";
}

function mouseOutFourth(){
    document.getElementById("fourth-featured-item").style.display = "block";
    document.getElementById("fourth-featured-item-details").style.display = "none";
}


