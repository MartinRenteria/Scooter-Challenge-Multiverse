class Scooter {
    constructor(serialNumber, station, user) {
        this.serialNumber = Math.floor(Math.random() * 100)
        this.station = station
        this.user = user 
    }
    recharge() {

    }
}

module.exports = Scooter

const s1 = new Scooter()

console.log(s1.serialNumber)