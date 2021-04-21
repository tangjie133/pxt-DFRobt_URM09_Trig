// 在此处添加您的代码

enum PIN {
    P0 = 3,
    P1 = 2,
    P2 = 1,
    P8 = 18,
    //P9 = 10,
    P12 = 20,
    P13 = 23,
    P14 = 22,
    P15 = 21,
};

//color=#6699CC
//% weight=10 color=#378CE1 icon="\uf101" block="URM09 Trig"
namespace trig {

    //%block="get %pin pin ultrasonic sensor  range units(cm)"
    export function ultraSonic(pin: PIN): number {
        let _pin;
        switch (pin) {
            case PIN.P0: _pin = DigitalPin.P0; break;
            case PIN.P1: _pin = DigitalPin.P1; break;
            case PIN.P2: _pin = DigitalPin.P2; break;
            case PIN.P8: _pin = DigitalPin.P8; break;
            case PIN.P12: _pin = DigitalPin.P12; break;
            // case PIN.P10: _T = DigitalPin.P10; break;
            case PIN.P13: _pin = DigitalPin.P13; break;
            case PIN.P14: _pin = DigitalPin.P14; break;
            case PIN.P15: _pin = DigitalPin.P15; break;
            default: _pin = DigitalPin.P0; break;
        }


        pins.digitalWritePin(_pin, 0)
        pins.digitalWritePin(_pin, 1)
        control.waitMicros(10)
        pins.digitalWritePin(_pin, 0)
        let ultraSonic_d = pins.pulseIn(_pin, PulseValue.High,35000)

        
        basic.pause(100)
        return Math.round((0.03435*ultraSonic_d)/2.0)
    }

}