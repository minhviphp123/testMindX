const buttonRandom = document.querySelector('.button-random');
const colors = [
  '#00aefd',
  '#ffa400',
  '#07a787',
  '#ff7870',
  'pink',
  'yellow',
  '#e74c3c',
  '#2979ff',
];
let copymau=0;
const codemau=document.querySelector('.ma-mau')
buttonRandom.addEventListener('click', function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  const divContainer = document.createElement("div");
  codemau.appendChild(divContainer);
        divContainer.innerHTML = `
            
            <div> ${randomColor}</div>
         `;
});

const buttoncopy = document.querySelector('.button-copy');
buttoncopy.addEventListener("click", function (){
    copymau=random;
   
})