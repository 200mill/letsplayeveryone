radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        앞으로()
    }
    if (receivedNumber == 2) {
        왼쪽()
    }
    if (receivedNumber == 3) {
        오른쪽()
    }
    if (receivedNumber == 4) {
        뒤로()
    }
    if (receivedNumber == 5) {
        멈춰()
    }
})
function 왼쪽 () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.FreeFall, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
})
function 오른쪽 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
}
function 뒤로 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 151)
}
function 멈춰 () {
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
function 앞으로 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 151)
}
radio.setGroup(247)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 30) {
        멈춰()
        music.playTone(800, music.beat(BeatFraction.Double))
    }
})
