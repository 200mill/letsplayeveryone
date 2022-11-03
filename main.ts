input.onButtonPressed(Button.A, function () {
    PWM += 100
})
input.onButtonPressed(Button.AB, function () {
    PWM = 0
})
input.onButtonPressed(Button.B, function () {
    PWM += -100
})
let PWM = 0
pins.digitalWritePin(DigitalPin.P1, 1)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, PWM)
})
