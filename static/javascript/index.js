
let header;
let heading;

function init(){
    header = document.getElementById("header");
    header.addEventListener("click", () => {
        document.body.style.backgroundColor = "red";
        header.addEventListener("mouseout", ()=>{
            document.body.style.backgroundColor = "white";
        })
    })
}

function hover(){
    heading = document.getElementsByTagName("h2");
    heading[0].addEventListener("mouseover", ()=>{
        heading[0].textContent = "How do you do?";
    })

    heading[1].addEventListener("mouseover", ()=>{
        heading[1].textContent = "How do you do?";
    })

    heading[2].addEventListener("mouseover", ()=>{
        heading[2].textContent = "How do you do?";
    })
    
}

function addP(){
    
    document.addEventListener("keydown", (e)=>{
        let newP = document.createElement('p');    
        newP.textContent = e.key;
        document.body.appendChild(newP);
    
    })
}

init();
hover();
addP();