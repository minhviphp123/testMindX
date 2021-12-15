//  CAU 1 : findOppositeNumber !

function findOppositeNumber(n, inputNumber) {

    let a = n / 2;

    if (inputNumber == 0) {
        return a;
    }

    if (inputNumber == a) {
        return 0;
    }

    if (inputNumber < a) {
        return (inputNumber + a);
    }

    if (inputNumber > a) {
        return (inputNumber - a);
    }

}