const chargeStatus = document.querySelector('#battery dd:nth-of-type(1)');
const chargeLevel = document.querySelector('#battery dd:nth-of-type(2) output');
const chargeMeter = document.querySelector('#battery dd:nth-of-type(2) progress');
const robohashImg = document.getElementById('robohash-img');

function updateBatteryStatus(battery) {
    if (battery.charging === true) {
        chargeStatus.textContent = "Charging...";
    } else {
        chargeStatus.textContent = "Discharging...";
    }
    
    const chargePercentage = battery.level * 100;
    chargeLevel.textContent = chargePercentage + "%";
    chargeMeter.value = chargePercentage;
    
    const imageURL = `https://robohash.org/${chargePercentage}?set=set1`;
    robohashImg.src = imageURL;
}

navigator.getBattery().then(battery => {
    updateBatteryStatus(battery);
    
    battery.addEventListener("chargingchange", () => {
        updateBatteryStatus(battery);
    });
    
    battery.addEventListener("levelchange", () => {
        updateBatteryStatus(battery);
    });
});
