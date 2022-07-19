let count = 0;

const currentNumber = document.getElementById('currentNumber');

function increment() {
	count++;
	currentNumber.innerHTML = count;
}

function decrement() {
	count--;
	currentNumber.innerHTML = count;
}

function colorRed() {
    if (currentNumber < 0) {
        return currentNumber.style.color = 'red';
    }
}

document.getElementById("currentNumber").addEventListener('click', colorRed);
        