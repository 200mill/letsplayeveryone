radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.ringTone(131)
        pins.servoWritePin(AnalogPin.P1, 0)
    } else if (receivedNumber == 1) {
        music.ringTone(500)
        pins.servoWritePin(AnalogPin.P1, 180)
    } else if (receivedNumber == 2) {
        music.ringTone(1000)
        pins.servoWritePin(AnalogPin.P1, 90)
    }
})
input.onButtonPressed(Button.A, function () {
    music.ringTone(500)
    pins.servoWritePin(AnalogPin.P1, 180)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    music.ringTone(1000)
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(131)
    pins.servoWritePin(AnalogPin.P1, 0)
})
pins.setAudioPin(AnalogPin.P10)
OLED.init(128, 64)
basic.forever(function () {
    radio.setGroup(randint(0, 255))
    basic.pause(10000)
})
basic.forever(function () {
    OLED.writeStringNewLine("")
})
