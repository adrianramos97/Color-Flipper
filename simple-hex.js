const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener("click", function () {
    let hexColor = [];
    let result = '#';
    for (let i = 0; i < 6; i++) {
        function getRandomNumber() {
            return Math.floor(Math.random() * colors.length);
        }
        const randomNumber = getRandomNumber();
        hexColor.push(colors[randomNumber]);
    }
    for (let j = 0; j < hexColor.length; j++) {
        result = result.concat(hexColor[j]);
    }
    document.body.style.backgroundColor = result;
    color.textContent = result;
});


