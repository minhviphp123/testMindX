//change color
const Color = document.querySelector(".color");

const btn = document.querySelector(".btn");



btn.addEventListener("click", function() {

    document.body.style.backgroundColor = Color.value;

})

// hien thi ma mau
const divContainer = document.querySelector(".divv");

const btnHienThi = document.querySelector(".btn1");

btnHienThi.addEventListener("click", function() {

    const hienThi = document.createElement("div");

    hienThi.classList.add("hienthi")

    divContainer.appendChild(hienThi);

    hienThi.innerHTML = Color.value;



})