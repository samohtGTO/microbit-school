let radioFreq: number
radioFreq = 0
while (true) {
    basic.showNumber(radioFreq)
    if (input.buttonIsPressed(Button.B)){
        radioFreq ++
    } else if (input.buttonIsPressed(Button.A)) {
        radioFreq --
    } else if (input.logoIsPressed()) {
        break
    }    
}
radio.setGroup(radioFreq)
