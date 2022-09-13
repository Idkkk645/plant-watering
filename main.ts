basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) < 840) {
        pins.servoWritePin(AnalogPin.P2, 80)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P2, 5)
        basic.pause(2000)
    } else {
        pins.servoWritePin(AnalogPin.P2, 5)
        basic.pause(300000)
    }
})
