const fs = require('fs');
const path = require('path');

const file1 = '/mnt/c/bla/test/test.txt';
const file2 = '/mnt/c/test/test.txt';

function compareAndReplace(file1, file2) {
    if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
        console.error('One or both files do not exist.');
        return;
    }

    const stat1 = fs.statSync(file1);
    const stat2 = fs.statSync(file2);

    if (stat1.mtime > stat2.mtime) {
        console.log('File 1 is newer than File 2.');
        fs.copyFileSync(file1, file2);
        console.log('File 2 has been updated')
    } else if (stat1.mtime < stat2.mtime) {
        console.log('File 2 is newer than File 1.');
        fs.copyFileSync(file2, file1);
        console.log('File 1 has been updated')
    } else {
        console.log('Files are the same.');
    }
}

compareAndReplace(file1, file2);