let radioFreq: number
radioFreq = 0


while (true) {
    basic.showNumber(radioFreq)
    if (input.buttonIsPressed(Button.B)){
        radioFreq ++
    } else if (input.buttonIsPressed(Button.A)) {
        radioFreq --
    } else if (input.logoIsPressed()) {
        basic.clearScreen()
        basic.pause(100)
        break
    }    
}
basic.showNumber(radioFreq)
basic.clearScreen()
basic.pause(100)
basic.showNumber(radioFreq)
radio.setGroup(radioFreq)

