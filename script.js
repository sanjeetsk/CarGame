let score = document.querySelector('.score');
let gameScreen = document.querySelector('.gameScreen');
let startScreen = document.querySelector('.startScreen');

startScreen.addEventListener('click', startGame);

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);

let controls = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player ={
    speed: 5, //5px per sec
    score: 0,
    start: false
}

function start(){
    // console.log("Car")
    let car=document.querySelector('.car');
    let road = gameScreen.getBoundingClientRect();
    console.log(road)

    carRect = car.getBoundingClientRect();
    console.log(carRect)
    //move the car

    console.log(player.x, player.y, player.speed)

    if(controls.ArrowUp && player.y > road.top){
        player.y -= player.speed;
    }
    if(controls.ArrowDown && player.y < road.bottom-(carRect.height + carRect.height/2) ){
        player.y += player.speed;
    }
    if(controls.ArrowLeft && player.x > road.left + (carRect.left + carRect.left/2)){
        player.x -= player.speed;
    }
    if(controls.ArrowRight  && player.x < road.right - (carRect.right + carRect.right/2)){
        player.x += player.speed;
    }
    
    
    if(player.start){
        console.log("After change", player.x, player.y)
        car.style.top = player.y + "px";
        car.style.left = player.x + "px";
        requestAnimationFrame(start);
    }
}



function keyPressed(event){
    // event.preventDefault();
    // console.log("key pressed", event.key)
    // keys[event.key]=true
    // console.log(keys)  
    console.log("Pressed",event.key);
    if(controls[event.key] == false){
        controls[event.key]=true;
        // console.log(controls)
    }
} 

function keyReleased(event){
    // console.log("key released")
    // keys[event.key]=false
    // console.log(keys) 
    console.log("Released",event.key);
    if(controls[event.key] == true){
        controls[event.key]=false; 
    }
}


// document.addEventListener('keydown', move);

// startScreen.classList.add('hide');

function startGame(){
    // console.log('Clicked')
    player.start = true;
    // console.log(startScreen.classList);
    startScreen.classList.add('hide');
    gameScreen.classList.remove('hide');

    //create a car
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    car.innerHTML = "Car";
    // car.style.left = "0px";
    // car.style.top = "0px";
    
    // console.log(car.offsetTop, car.offsetLeft)
    car.style.backgroundColor = "red";
    gameScreen.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    
    // for(i=0; i<5; i++){
    //     let car=document.createElement('div');
    //     car.innerText = "Car" +" " + (i+1);
    //     gameScreen.appendChild(car);
    // }

    requestAnimationFrame(start)
}
