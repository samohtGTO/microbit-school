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


basic.pause(100)
PCA9685.reset(64)
let tar:number = 0
basic.forever(function() {

    pins.digitalReadPin(DigitalPin.P0)?tar=1:tar;
    pins.digitalReadPin(DigitalPin.P1)?tar=2:tar;
    pins.digitalReadPin(DigitalPin.P2)?tar=3:tar;

    basic.showNumber(tar)

    if( tar>0){
        radio.sendValue("punten", tar)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, 180, 64)
        basic.pause(100)
        tar=0
    } else{
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, -180, 64)
    }
    

})
