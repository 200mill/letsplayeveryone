input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 180)
})
basic.forever(function () {
	
})
