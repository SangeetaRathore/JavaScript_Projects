let colorCode = document.querySelector('#colorCode');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let newColor = generateTheColor(); 
    colorCode.innerText = newColor;
    document.body.style.backgroundColor = newColor;
});

function generateTheColor() {
    let colors = ['red', 'green', 'rgb(19, 136, 8)', '#88087d', 'grey'];
    let newCc = colors[Math.floor(Math.random() * colors.length)];
    return newCc;
}
