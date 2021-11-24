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
      return 'username is already registered'
    }
  }
  
}

module.exports = ScooterApp;