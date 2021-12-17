//cau 1: Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.


let array = ["SON", "PHUOC", "KHANH", "BINH", "MINH"];
let max = array[0];

let arr = [];
let i = 0;

for (let index = 1; index < array.length; index++) {
    const element = array[index];

    if (max.length < element.length) {

        max = element;

    }

}

arr[i] = max;

//con` "KHANH"

let indexOfMax = array.indexOf(max);

array.splice(indexOfMax, 1); //remove "PHUOC";



for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (max.length == element.length) {

        i++;

        arr[i] = element;

    }

}

console.log(arr);