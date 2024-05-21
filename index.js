
// filtercards

//Select all filter buttons and filertable cards

const filterButton=document.querySelectorAll(".shop .filter_button button");
const filterCard=document.querySelectorAll(".shop .cont .filter_card .card ");




//define the filtercards function
const filterCards=e=>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    

    //Iterate over each cards
    filterCard.forEach(card=>{

        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name ||e.target.dataset.name ==="all"){
            card.classList.remove("hide");
        }
    });
}
//Add click event listner to each filter button

filterButton.forEach(button=>button.addEventListener("click",filterCards))


//sorting


let cards=Array.from(document.getElementsByClassName("card"));

  let select =document.getElementById("select");

  let sortItems;

  function sortcards(){
    sortItems=cards.sort((a,b)=>{
        let card1=a.getAttribute("data-price");
        console.log(card1);
        
        let card2=b.getAttribute("data-price");
        console.log(card2)
        if(select.value==="High-Low"){
            return card1-card2;
        }
        else if(select.value==="Low-High"){
            return card2-card1;

        }
    })
  }


