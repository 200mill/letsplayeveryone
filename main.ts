basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    basic.pause(1000)
})
