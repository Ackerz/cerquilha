let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container');
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector('#message p');
let secondPlayer;

// Conta jogadas

let player1 = 0;
let player2 = 0;

// Evento de clique
for(let i =0; i< boxes.length; i++){
    boxes[i].addEventListener("click", function(){

        let el;

        if(player1 == player2){
            // vez do x
            el = x
        }else{
            // vez do o
            el = o
        }

        let cloneEl = el.cloneNode(true)

        this.appendChild(cloneEl)
    })
}