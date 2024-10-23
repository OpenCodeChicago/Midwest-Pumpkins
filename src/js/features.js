var cards = Array.from(document.getElementsByClassName("features-card"));


window.onresize = window.onload = function() {
        if(screen.width < 500){
            cards.forEach(showDetails);
        }    
}

function showDetails(card){
    let detailsCard = card.querySelector("div.card-details");
    card.onclick = function(){
        
        if(detailsCard.style.height != "100%"){
            detailsCard.style.height = "100%";
        }
        else{
            detailsCard.style.height ="0";
        }
    }
}