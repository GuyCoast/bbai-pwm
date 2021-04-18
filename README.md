Configure and use the PWM output for new BeagleBone AI board

Usage:

       const pwm = require('bbai-pwm');


       pwm.Init('pwm output', period, enable, function(err, stderr) {
           if (err)
           console.log(err);
       });

       pwm output is a string and selects which pwm to use:
           '2a' select and enable pwm output A
           '2b' select and enable pwm output B
           'all' select and enable pwm output A+B

       period in uS
       enable set to 1, enable pwm output
       enable set to 0, disable pwm output


       pwm.DutyCycle('pwm output', dutycycle, function(err, stderr) {
        if (err)
            console.log(err);
       });

       pwm output same as pwm.Init
       dutycycle is the value of the dutycycle between 0 and period


Example:

        const pwm = require('bbai-pwm');

        pwm.Init('2a', 50000, 1, function(err, stderr) {  //period 50000 microseconds
        if (err)
            console.log(err);
        });

        pwm.DutyCycle('2a', 25000, function(err, stderr) { // In this example 25000 is half of the output voltage
        if (err)
            console.log(err);
        });

Note:
      to work you need to enable the pwm devices, in the dtb configuration file