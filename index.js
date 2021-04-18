const exec = require('child_process').exec;

/*
 * Return callback 
 * @param {error, error output} callback
 */
function pwmInit(pwms, period, enable, callback) {
    if (pwms === '2a' || pwms === 'all') {
        exec("echo 0 > /sys/class/pwm/pwmchip0/export", function(err, stderr) {
            //callback(err, stderr);
        });
        exec("echo " + period + " > /sys/class/pwm/pwmchip0/pwm-0:0/period && echo " + enable + " > /sys/class/pwm/pwmchip0/pwm-0:0/enable && echo 0 > /sys/class/pwm/pwmchip0/pwm-0:0/duty_cycle", function(err, stderr) {
            callback(err, stderr);
        });
    }
    
    if (pwms === '2b' || pwms === 'all') {
        exec("echo 1 > /sys/class/pwm/pwmchip0/export", function(err, stderr) {
            //callback(err, stderr);
        });
        exec("echo " + period + " > /sys/class/pwm/pwmchip0/pwm-0:1/period && echo " + enable + " > /sys/class/pwm/pwmchip0/pwm-0:1/enable && echo 0 > /sys/class/pwm/pwmchip0/pwm-0:1/duty_cycle", function(err, stderr) {
            callback(err, stderr);
        });
    }
}
module.exports.Init = pwmInit;


function PwmDutyCycle(pwms, duty, callback) {
    if (pwms === '2a' || pwms === 'all') {
        exec("echo " + duty + " > /sys/class/pwm/pwmchip0/pwm-0:0/duty_cycle", function(err, stderr) {
            callback(err, stderr);
        });
    }
    
    if (pwms === '2b' || pwms === 'all') {
        exec("echo " + duty + " > /sys/class/pwm/pwmchip0/pwm-0:1/duty_cycle", function(err, stderr) {
            callback(err, stderr);
        });
    }
}
module.exports.DutyCycle = PwmDutyCycle;
