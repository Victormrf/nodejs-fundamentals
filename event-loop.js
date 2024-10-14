const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('immediate 1 finished'));

fs.readFile('test-file.txt', () => {
    console.log('I/O finished');
    console.log('--------------------');

    setTimeout(() => console.log('Timer 2 finished'), 0);
    setTimeout(() => console.log('Timer 3 finished'), 3000);
    setImmediate(() => console.log('immediate 2 finished'));

    process.nextTick(() => console.log('Process.nextTick'))

    crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
        console.log(Date.now() - start, 'Password incrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
        console.log(Date.now() - start, 'Password incrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
        console.log(Date.now() - start, 'Password incrypted');
    });
})

console.log('Hello from the top-level code');