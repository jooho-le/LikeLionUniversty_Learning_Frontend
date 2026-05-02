// 제어문

// 1. 조건문
// var a = 5;

// if (a > 2) {
//     console.log('a는 2보다 크다');
// } else {
//     console.log('a는 2보다 작거나 같다');
// }

// if (a > 2) {
//     console.log('a는 2보다 크다');
// } else if (a == 2) {
//     console.log('a는 2와 같다');
// } else {
//     console.log('a는 2보다 작다');
// }

var mbti = 'infp';
var val;
switch (mbti) {
    case 'infp':
        val = "내향적, 직관적, 감정적, 인식적";
        break;
    case 'enfp':
        val = "내향적, 직관적";
        break;
    case 'isfp':
        val = "내향적";
        break;
    default:
        val = "유효한 값이 아님";
}

// 2. 반복문 