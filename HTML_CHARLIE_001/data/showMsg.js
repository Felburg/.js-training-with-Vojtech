function required(){
    var userNumber1 = document.getElementById('userNumber').value;

    console.log("userNumber1 = " + userNumber1);

    if (userNumber1 < 1 || userNumber1 > 6) {
        document.getElementById("userNumber").disabled = true;
        }
    else {
        document.getElementById("userNumber").disabled = false;
    }
}


function showMsg() {
    var userMessage1 = document.getElementById('userMessage').value;
    var userNumber1 = document.getElementById('userNumber').value;

    var arr1 = [];

    for (var i = 0; i < userNumber1; i++) {
        arr1.push(i);
    }

    console.log("userNumber1 = " + userNumber1);
    console.log("log arr value = " + arr1);
    console.log("log arr length = " + arr1.length);

    arr1.forEach(function (value, index) {
        confirm(userMessage1);
        console.log(value, index);
    });
}
