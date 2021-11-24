const User = require('./user')
const Scooter = require('./scooter')

class ScooterApp {
  static registeredUsers = []
  constructor() {
    this.stations = {
      'Main Street': []
      }
  }
  register(user) {
    if(!ScooterApp.registeredUsers.includes(user.username)) {
        ScooterApp.registeredUsers.push(user.username, user.password, user.age)
        console.log('You have been registered')
    } else {
      return 'user is already registered or age is invalid'
    }
  }
  dock()
}

const scooter = new ScooterApp()
scooter.addScooter('Main Street', 'Scooter1')
console.log(ScooterApp.this.stations)

module.exports = ScooterApp;