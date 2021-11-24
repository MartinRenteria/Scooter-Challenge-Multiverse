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

}

const user1 = new ScooterApp()
const user2 = new ScooterApp()
const user3 = new ScooterApp()

user1.register('Martin','secretPassoword',26)
console.log(user2.register('Martin','secretPassoword',26))
user3.register('pretti', 'secret', 20)


module.exports = ScooterApp;