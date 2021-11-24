class Scooter {
    static serialNumber = 100
    constructor(station, user) {
        this.station = station
        this.user = user 
        this.serialNumber = Scooter.serialNumber
        Scooter.serialNumber+= 1
        this.Broken = false
        this.docked = true
    }
    recharge() {
        console.log("Recharging...")
        setTimeout(function() {
            console.log('Finished Charging!');
          }, 2000);
          return "Almost there..."
    }
    
    async fixScooter() {
        console.log('Charging....')
        await new Promise(resolve => {
          setTimeout(resolve, 1000)
        })
        console.log("Scooter has been recharged!")
      }

    rent() {
        if(!this.Broken) {
          this.docked = false
          console.log('Scooter rented! Have fun!')
        }else {
          console.log('Scooter is broken...please send a repair request')
        }
      }
}

// const scooter = new Scooter()
// scooter.recharge()
// scooter.fixScooter()
// scooter.rent()

module.exports = Scooter;