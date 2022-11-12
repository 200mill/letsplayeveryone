function turnleft () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
})
function backward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    basic.pause(1000)
}
function turnright () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(1000)
}
function foward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
}
basic.forever(function () {
    basic.showString("My Name")
    basic.showString("Your Name")
    basic.showString("Their Name")
    basic.showString("Our Name")
    basic.showString("His Name")
    basic.showString("Her Name")
    basic.showString("UzalTV")
})
