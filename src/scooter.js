class Scooter {
    static serialNumber = 100
    constructor(station, user) {
        this.serialNumber = Scooter.serialNumber
        Scooter.serialNumber+= 1
        this.station = station
        this.user = user 
        this.Broken = false
        this.docked = true
    }
    recharge() {
        console.log("Recharging...")
        setTimeout(function() {
            console.log('Finished Charging!');
          }, 5000);
    }
    
    fixScooter() {
        console.log('Thank you for submitting a request. Fixing Scooter...');
        setTimeout(function() {
            console.log('Repairs are complete!');
          }, 5000);

    }
}

const scooter1 = new Scooter('main','martin');
// const scooter2 = new Scooter('main','Pretti');
// console.log(scooter1.serialNumber);
// console.log(scooter2.serialNumber);
console.log(scooter1.fixScooter())

module.exports = Scooter;