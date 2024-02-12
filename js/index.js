//Constants
const PADS_DOM = Array.from(document.querySelectorAll(".pad"))

const PLAYER_INFO = document.getElementById('player')

const handleClick = function() { 

    const pad = this

    if (player1Turn == true) {
        pad.innerHTML = "X"
        player1Turn = false
        player2Turn = true
        changeLettering()
        verifyVictory("X")
    } else if (player2Turn == true) {
        pad.innerHTML = "O"
        player2Turn = false
        player1Turn = true
        changeLettering()
        verifyVictory("O")
    }

    pad.removeEventListener('click', handleClick)
    playsCount++
    
    if(playsCount == 9 && win == false){
        PLAYER_INFO.innerHTML = "DRAW!"
        PLAYER_INFO.style.color = "green"
        PADS_DOM.forEach(pad =>{
            pad.style.color = "green"
        })
    }

}

const REMATCH_BUTTON = document.getElementById('rematch').onclick = () =>{

    player1Turn = false
    player2Turn = false
    playsCount = 0
    win = false


    PADS_DOM.forEach(pad =>{
        pad.innerHTML = ""
        pad.style.color = "black"
    })

    PADS_DOM.forEach(pad => {
        pad.addEventListener('click', handleClick)
    })

    whoStart()
}


//Variables
let player1Turn = false
let player2Turn = false
let win = false
let playsCount = 0

//Functions
PADS_DOM.forEach(pad => {
    pad.addEventListener('click', handleClick)
})


function whoStart(){
    let random = Math.floor(Math.random() * 2 + 1)

    if(random == 1){
        player1Turn = true
        changeLettering()
    }else if(random == 2){
        player2Turn = true
        changeLettering()
    }
}

function changeLettering(){
    if(player1Turn == true){
        PLAYER_INFO.innerHTML = "'X' Turn!"
        PLAYER_INFO.style.color = "red"
    }else if(player2Turn == true){
        PLAYER_INFO.innerHTML = "'O' Turn!"
        PLAYER_INFO.style.color = "blue"
    }
}

function verifyVictory(x_Or_O){
    
    //HORIZONTAL VICTORY
    if(PADS_DOM[0].innerHTML == x_Or_O && PADS_DOM[1].innerHTML == x_Or_O && PADS_DOM[2].innerHTML == x_Or_O){
        PLAYER_INFO.innerHTML = `Player ${x_Or_O} wins!`

        finalAdjusts(PADS_DOM[0], PADS_DOM[1], PADS_DOM[2], x_Or_O)
    }
    else if(PADS_DOM[3].innerHTML == x_Or_O && PADS_DOM[4].innerHTML == x_Or_O && PADS_DOM[5].innerHTML == x_Or_O){
        PLAYER_INFO.innerHTML = `Player ${x_Or_O} wins!`

        finalAdjusts(PADS_DOM[3], PADS_DOM[4], PADS_DOM[5], x_Or_O)
    }
    else if(PADS_DOM[6].innerHTML == x_Or_O && PADS_DOM[7].innerHTML == x_Or_O && PADS_DOM[8].innerHTML == x_Or_O){
        PLAYER_INFO.innerHTML = `Player ${x_Or_O} wins!`

        finalAdjusts(PADS_DOM[6], PADS_DOM[7], PADS_DOM[8], x_Or_O)
    }

    //DIAGONAL VICTORY
    else if(PADS_DOM[0].innerHTML == x_Or_O && PADS_DOM[4].innerHTML == x_Or_O && PADS_DOM[8].innerHTML == x_Or_O){
        PLAYER_INFO.innerHTML = `Player ${x_Or_O} wins!`

        finalAdjusts(PADS_DOM[0], PADS_DOM[4], PADS_DOM[8], x_Or_O)
        
    }

    else if(PADS_DOM[2].innerHTML == x_Or_O && PADS_DOM[4].innerHTML == x_Or_O && PADS_DOM[6].innerHTML == x_Or_O){
        PLAYER_INFO.innerHTML = `Player ${x_Or_O} wins!`

        finalAdjusts(PADS_DOM[2], PADS_DOM[4], PADS_DOM[6], x_Or_O)

    }

    //VERTICAL VICTORY
    else if(PADS_DOM[0].innerHTML == x_Or_O && PADS_DOM[3].innerHTML == x_Or_O && PADS_DOM[6].innerHTML == x_Or_O){
        PLAYER_INFO.innerHTML = `Player ${x_Or_O} wins!`

        finalAdjusts(PADS_DOM[0], PADS_DOM[3], PADS_DOM[6], x_Or_O)
    }

    else if(PADS_DOM[1].innerHTML == x_Or_O && PADS_DOM[4].innerHTML == x_Or_O && PADS_DOM[7].innerHTML == x_Or_O){
        PLAYER_INFO.innerHTML = `Player ${x_Or_O} wins!`

        finalAdjusts(PADS_DOM[1], PADS_DOM[4], PADS_DOM[7], x_Or_O)
    }

    else if(PADS_DOM[2].innerHTML == x_Or_O && PADS_DOM[5].innerHTML == x_Or_O && PADS_DOM[8].innerHTML == x_Or_O){
        PLAYER_INFO.innerHTML = `Player ${x_Or_O} wins!`

        finalAdjusts(PADS_DOM[2], PADS_DOM[5], PADS_DOM[8], x_Or_O)
    }

}

function finalAdjusts(x,y,z, whoWin){
   
   if(whoWin == "X"){
    x.style.color = "red"
    y.style.color = "red"
    z.style.color = "red"
    PLAYER_INFO.style.color = "red"
   }else{
    x.style.color = "blue"
    y.style.color = "blue"
    z.style.color = "blue"
    PLAYER_INFO.style.color = "blue"

   }

   win = true 

    PADS_DOM.forEach(pad =>{
        pad.removeEventListener('click', handleClick)
    })

}


//Code Itself
whoStart()