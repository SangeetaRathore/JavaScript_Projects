let colorCode = document.querySelector('#colorCode');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    let newColor = generateTheColor(); 
    colorCode.innerText = newColor;
    document.body.style.backgroundColor = newColor; 
});

function generateTheColor() {
    let hexaColor = '#';
    const num = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        hexaColor += num[Math.floor(Math.random() * 16)];
    }
    return hexaColor;
}
