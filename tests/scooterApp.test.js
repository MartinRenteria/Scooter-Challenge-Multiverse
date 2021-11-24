const User = require('../src/user')
const ScooterApp = require('../src/scooterApp')

describe('ScooterApp Class Method', () => {
    test('Should register username', () => {
        const test = new ScooterApp()
        const testUser = new User('Martin','secretPassoword','26')
        test.register(testUser)
        expect(ScooterApp.registeredUsers).toStrictEqual(['Martin','secretPassoword','26'])
    })
})