let toggle = document.getElementById("toggle");
let list = document.getElementById("nav-list");

toggle.addEventListener("click",(e)=>{
    let isTrusted = e.isTrusted

    if(isTrusted){
        if(e.srcElement.className == "fa-solid fa-bars"){
            e.srcElement.className = "fa-solid fa-xmark";
            list.className = "list-item"

        }else if(e.srcElement.className == "fa-solid fa-xmark"){
            e.srcElement.className = "fa-solid fa-bars"
            list.className = "media-navbar";
        }
    }
})
// End of Navbar Functionality
