const Scooter = require('../src/scooter')

test('Makes new instance of Scooter', () => {
    const testSerial = new Scooter()
    expect(testSerial.serialNumber).toBe(100)
})