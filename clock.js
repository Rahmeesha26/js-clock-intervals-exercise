const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

setInterval(setDate, 1000)

// function setClock() {
//     const currentDate = new Date()
//     const secondsRatio = currentDate.getSeconds() / 60
//     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//     const hoursRatio =(minutesRatio + currentDate.getHours()) /12
//     setRotation(secondHand, secondsRatio)
//     setRotation(minuteHand, minutesRatio)
//     setRotation(hourHand, hoursRatio) 
// }

// function setRotation(element, rotationRatio) {
//     element.style.setProperty('--rotation', rotationRatio * 360)
// }

// setClock()


function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = second * 6;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = minute * 6;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    let hour = now.getHours();
    
    //if hour is more than 12 subtract 12 from it
    if (hour > 12)  {       
         hour =hour - 12; 
}
    const hourDegrees = hour * 30;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


