OLED.init(128, 64)
basic.forever(function () {
    OLED.writeStringNewLine("Sensor1 : " + Environment.ReadSoilHumidity(AnalogPin.P1))
    OLED.clear()
})
