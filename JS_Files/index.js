//    HTML5 Speech Recognition API 

function startDictation(cons) {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        var recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = 'en-US';
        recognition.start();
        var constant = cons;
        recognition.onresult = function (e) {
            document.getElementById(constant).value = e.results[0][0].transcript;
        };

        recognition.onerror = function (e) {
            recognition.stop();
        };
    }
}


function solution11() {
    var cons = "fname";
    startDictation(cons)
}
function solution12() {
    var cons = "lname";
    startDictation(cons)
}
function solution21() {
    var cons = "contactname";
    startDictation(cons)
}
function solution22() {
    var cons = "age";
    startDictation(cons)
}

function solution31() {
    var cons = "gender";
    startDictation(cons)
}
function solution32() {
    var cons = "contactphone";
    startDictation(cons)
}
function solution4() {
    var cons = "bloodgroup";
    startDictation(cons)
}

// function solution51() {
//     var cons = "weight";
//     startDictation(cons)
// }
function solution52() {
    var cons = "registree_relaton";
    startDictation(cons)
}

function solution61() {
    var cons = "phoneno1";
    startDictation(cons)
}
function solution62() {
    var cons = "phoneno2";
    startDictation(cons)
}

function solution71() {
    var cons = "contactemail";
    startDictation(cons)
}
function solution72() {
    var cons = "message";
    startDictation(cons)
}

function solution81() {
    var cons = "address1";
    startDictation(cons)
}
function solution82() {
    var cons = "registree_name";
    startDictation(cons)
}

function solution91() {
    var cons = "reason_for_emergency";
    startDictation(cons)
}
function solution92() {
    var cons = "medical_history";
    startDictation(cons)
}
