const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = 'rotate(${secondDegrees}deg)';

    const minute = now.getMinutes();
    const minuteDegrees = ((mins / 60) * 360) + 90 ;
    minuteHand.style.transform = 'rotate(${minuteDegrees}deg)';

    const hour = now.getMinutes();
    const hourDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform = 'rotate(${hourDegrees}deg)';
}

setInterval(setDate, 1000);