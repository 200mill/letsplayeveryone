let PWM = 0
input.onButtonPressed(Button.A, function () {
    PWM += 100
})
input.onButtonPressed(Button.AB, function () {
    PWM = 0
})
input.onButtonPressed(Button.B, function () {
    PWM += -100
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, PWM)
})
basic.forever(function () {
    if (input.lightLevel() < 100) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
