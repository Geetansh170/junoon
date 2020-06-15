const fs = require('fs');
const log_file = './data/logs.json';

exports.read_logs = function () {
    try {
        const logs = fs.readFileSync(log_file);
        var parsed = JSON.parse(logs);
        if (parsed.requests === undefined) parsed.requests = [];
        if (parsed.exceptions === undefined) parsed.exceptions = [];
        return parsed;
    } catch (error) {
        console.log('Something went wrong trying to read logs: ' + error);
        return "";
    }
}

exports.log_request = function (request) {
    const logs = this.read_logs();
    logs.requests.push(request);
    this.update_file(logs);
}

exports.log_exception = function (exception) {
    const logs = this.read_logs();
    logs.exceptions.push(exception);
    this.update_file(logs);
}

this.update_file = function (data) {
    try {
        fs.writeFile(log_file, JSON.stringify(data), err => {
            if (err) {
                console.log('Something went wrong trying to save log');
                return;
            }
        });
    } catch (error) {
        //console.log(error);
    }
}

//Try to find the file, if it doesn't exist, create it
const exists = fs.existsSync(log_file);
if (!exists) {
    const logs = {};
    this.update_file(logs);
}
