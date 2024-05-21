

const search =()=>{

    const searchBox= document.getElementById("search-item").value.toUpperCase();
    const product =document.querySelectorAll(".card");
    const pname=document.getElementsByTagName("h6")

    for(var i=0;i<pname.length;i++){
        let match =product[i].getElementsByTagName("h6")[0];
        console.log(match);

        if(match){
            let textvalue=match.textContent || match.innerHTML;
            console.log("html "+match.innerHTML);
            console.log("match textcont  "+match.textContent);
            console.log(textvalue);

            if(textvalue.toUpperCase().indexOf(searchBox)>-1){
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
        }

    }

}
