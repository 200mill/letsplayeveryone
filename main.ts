radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.servoWritePin(AnalogPin.P1, 0)
    } else if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P1, 180)
    } else if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P1, 90)
    }
})
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 180)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
})
basic.forever(function () {
    radio.setGroup(randint(0, 255))
    basic.pause(10000)
})
