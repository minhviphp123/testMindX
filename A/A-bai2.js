//cau 2: tinh so can nang 2 team A va B

const array = [{
        thanhNien: 1,
        weigh: 60,
    },
    {
        thanhNien: 2,
        weigh: 40,
    },
    {
        thanhNien: 3,
        weigh: 55,
    },
    {
        thanhNien: 4,
        weigh: 75,
    },
    {
        thanhNien: 5,
        weigh: 64,
    },
]

let tongSoCanNhomA = 0;

let tongSoCanNhomB = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i].stt % 2 === 0) {

        tongSoCanNhomA += array[i].weigh;

    } else tongSoCanNhomB += array[i].weigh;

}
const tongcan = [{
        tongSoCanNhomA,
    },
    {
        tongSoCanNhomB,
    },
]

console.log(tongcan);