const User = require('../src/user')
const Scooter = require('../src/scooter')

class ScooterApp {

  static registeredUsers = []
  constructor() {
    this.stations = {
      'Main Street': []
      }
  }

  register(user) {
    if(ScooterApp.registeredUsers.includes(user.username)) {
      if(user.age > 17) {
        ScooterApp.registeredUsers.push(user.username) = {
          password: user.password,
          age: user.age 
        }
        console.log('You have been registered')
      }
    }
  }
}

const scooter = new ScooterApp()
scooter.register('Martin')

module.exports = ScooterApp;