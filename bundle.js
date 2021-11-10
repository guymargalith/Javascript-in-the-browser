(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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
},{}]},{},[1]);
