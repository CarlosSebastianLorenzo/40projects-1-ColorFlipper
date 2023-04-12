let $colorButton = document.querySelector('main button');
let $body = document.getElementsByTagName('body')[0];
let $h2 = document.getElementById('h2');

let numColorArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

let color = "#" //15f876  numColorArray[5]

for (let i = 0; i < 6; i++){
    color = color + numColorArray[Math.floor(Math.random() * numColorArray.length)]
}

$colorButton.addEventListener('click', function(){
    $body.style.backgroundColor = color
    $h2.innerHTML = color
    $h2.style.color = color
    $colorButton.style.color = color
    color = "#"
    for (let i = 0; i < 6; i++){
        color = color + numColorArray[Math.floor(Math.random() * 16)]
    }
})