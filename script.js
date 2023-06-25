setInterval(() => {
    let date = new Date;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let hRotation = 30 * hour + 0.5 * minute + (1 / 120) * second;
    let mRotation = 6 * minute + 0.1 * second
    let sRotation = 6 * second;

    let hourHand = document.getElementById("hour");
    let minHand = document.getElementById("minute");
    let secondHand = document.getElementById("second");

    hourHand.style.transform = `rotate(${hRotation}deg)`
    minHand.style.transform = `rotate(${mRotation}deg)`
    secondHand.style.transform = `rotate(${sRotation}deg)`
    console.log("hello")
}, 1000)