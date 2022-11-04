let SPD = 0
input.onButtonPressed(Button.A, function () {
    SPD += 10
})
IR.IR_callbackUser(function (message) {
    if (message == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, SPD)
    } else if (message == 1) {
        // turn right
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, SPD)
    } else if (message == 2) {
        // turn left
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, SPD)
    } else if (message == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, SPD)
    }
})
input.onButtonPressed(Button.AB, function () {
    SPD = 30
})
input.onButtonPressed(Button.B, function () {
    SPD += -10
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 20) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
