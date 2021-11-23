class Scooter {
    static serialNumber = 100
    constructor(station, user) {
        this.serialNumber = Scooter.serialNumber
        Scooter.serialNumber+= 1
        this.station = station
        this.user = user 
    }
    recharge() {
        return console.log("")
    }
}

module.exports = Scooter;

const scooter1 = new Scooter('main','martin');
const scooter2 = new Scooter('main','Pretti');
console.log(scooter1.serialNumber);
console.log(scooter2.serialNumber);