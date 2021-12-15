// CAU 2 : Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

const input = [

    {
        number: 1,
        canNang: 60,
    },
    {
        number: 2,
        canNang: 40,
    },
    {
        number: 3,
        canNang: 55,
    },
    {
        number: 4,
        canNang: 75,
    },
    {
        number: 5,
        canNang: 64,
    },
]

let soCanNhomA = 0;

let soCanNhomB = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i].number % 2 === 0) {
        soCanNhomA += input[i].canNang;
    } else soCanNhomB += input[i].canNang;

}
const tongSoCan = [{
        soCanNhomA,
    },
    {
        soCanNhomB,
    },
]

console.log(tongSoCan);