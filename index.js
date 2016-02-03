var cp = require('child_process');

/**
 * Execute iisreset command
 *
 * @options  {server: "serverName", action : "start/stop/restart"}
 */
module.exports = function (options, cb) {
    var args = [options.server, '/' + options.action];
    var spawn = cp.spawn('iisreset', args);
    var output = "";
    if (typeof cb === 'function') {
        spawn.on('error', function (err) {
            cb(err, null);
        });
        spawn.stdout.on('data', function (data) {
            output += String(data);
        });
        spawn.on('exit', function (code) {
            if (code === 0) {
                cb(null, output);
            } else {
                cb(Error(output), null);
            }
        });
    }
    else {
        return new Promise(function (resolve, reject) {
            spawn.on('error', function (err) {
                reject(err);
            });
            spawn.stdout.on('data', function (data) {
                output += String(data);
            });
            spawn.on('exit', function (code) {
                if (code === 0) {
                    resolve(output);
                } else {
                    reject(Error(output));
                }
            });
        });
    }

}

