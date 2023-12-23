
function calculateFactorial() {

    var numberInput = document.getElementById('number').value;

    if (Number.isInteger(Number(numberInput)) && Number(numberInput) >= 0) {
        var factorial = 1;
        for (var i = 1; i <= Number(numberInput); i++) {
            factorial *= i;
        }
        console.log=(factorial);
        document.getElementById('answer').innerHTML = 'Factorial of ' + numberInput + ' is: ' + factorial;
    } else {
        document.getElementById('answer').innerHTML = 'Something went wrong.';
        console.log=(factorial);
    }
}
