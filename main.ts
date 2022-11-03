input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    pins.servoWritePin(AnalogPin.P1, randint(0, 180))
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    pins.servoWritePin(AnalogPin.P1, 0)
})
pins.setAudioPin(AnalogPin.P10)
basic.forever(function () {
	
})
