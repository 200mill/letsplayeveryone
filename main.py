SPD = 0

def on_button_pressed_a():
    global SPD
    SPD += 10
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_ir_callbackuser(message):
    if message == 0:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, SPD)
    elif message == 1:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, SPD)
    elif message == 2:
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, SPD)
    elif message == 3:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, SPD)
IR.IR_callbackUser(on_ir_callbackuser)

def on_button_pressed_ab():
    global SPD
    SPD = 30
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global SPD
    SPD += -10
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) <= 20:
        maqueen.motor_stop(maqueen.Motors.ALL)
basic.forever(on_forever)
