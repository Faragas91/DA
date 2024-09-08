let count = 0;

function init(){
    debuggerOutput('init');
    testTwo('testTwo');
}

function testOne(){
    debuggerOutput('testOne');
}

function testTwo(text){
    debuggerOutput(text);
    testOne();
}

function debuggerOutput(text){
    count++;
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML = text + count;
}