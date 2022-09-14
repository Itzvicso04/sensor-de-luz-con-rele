basic.forever(function () {
    if (input.lightLevel() > 150) {
        let ALTA = 0
        pins.digitalWritePin(DigitalPin.P0, ALTA)
    } else {
        let BAJA = 0
        pins.digitalWritePin(DigitalPin.P0, BAJA)
    }
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
})
