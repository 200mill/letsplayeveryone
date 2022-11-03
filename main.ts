let loadtime = 0
let time = 0
OLED.init(128, 64)
for (let index = 0; index < 100; index++) {
    OLED.drawLoading(time)
    time += 1
}
basic.forever(function () {
    OLED.writeNumNewLine(loadtime)
    OLED.writeStringNewLine("Sensor1 : " + Environment.ReadDust(DigitalPin.P13, AnalogPin.P1))
    loadtime += 1
    OLED.clear()
})
