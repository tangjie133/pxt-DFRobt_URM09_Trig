#include "pxt.h"
#include "nrf_gpio.h"

#include "pxtbase.h"

//% color=50 weight=80
//% icon="\uf1eb"
namespace time_us { 

//%
 void sleep_us(int us){
     target_wait_us(us);
 }
}