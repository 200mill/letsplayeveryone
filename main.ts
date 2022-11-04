let SPD = 0
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
	
}
input.onButtonPressed(Button.A, function () {
    radio.setGroup(247)
    SPD += 10
})
function 오른쪽 () {
	
}
function 뒤로 () {
	
}
function 멈춰 () {
	
}
input.onButtonPressed(Button.AB, function () {
    SPD = 30
})
input.onButtonPressed(Button.B, function () {
    SPD += -10
})
function 앞으로 () {
	
}
