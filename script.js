const hourHand = document.querySelector("#data-hour-hand")
const minuteHand = document.querySelector("#data-minute-hand")
const secondHand = document.querySelector("#data-second-hand")

/*
1. take a date into a variable
2. using date map the ratio  
*/ 
setInterval(setClock,1000)

function setClock(){

    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = ( secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio =  ( minuteRatio + currentDate.getHours() ) / 12;

    //console.log(hourHand)

    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);
}

/*
1. take a element and rotation
2. change the css property and apply rotation in according to circle (360 degrees)   
*/ 
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}