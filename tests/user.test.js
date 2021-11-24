const User = require('../src/User')

describe('Username property', () => {
  test('Returns exact username', () => {
    const newUser = new User('Martin', 'Secret', 30);
    expect(newUser.username).toBe('Martin');
  })
})

describe('Password Property', () => {
  test('Returns exact password', () => {
    const newUser = new User('Martin', 'secret', 30);
    expect(newUser.password).toBe('secret');
  })
})

describe('Age Property', () => {
  test('Returns a number', () => {
    const newUser = new User('Martin', 'secret', 30);
    expect(newUser.age).toBe(30);
  })
})