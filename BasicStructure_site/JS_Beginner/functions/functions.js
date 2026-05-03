// 함수
// 작업의 묶음 - 코드를 반복해서 작성하는 비효율을 줄임 

// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(10, 5));

// var result = multiply(20, 10);
// console.log(result);

// js만의 방법
// var multiply = function (x, y) {
//     return x * y;
// };

// console.log(multiply(10, 5));

// 변수 키워드 
// var a = 10;

// while (true) {
//     var a = 1000;
//     break;
// }

// console.log(a); // js는 지역변수도 함수 레벨 스코프이기 때문에 a는 1000이 된다. (var는 함수 레벨 스코프)

// 호이스팅
// console.log(word);
// word = 'hello';

// console.log(word);
// var word;

// js는 변수 선언이 최상단으로 끌어올려지는 호이스팅이 일어나기 때문에 word는 undefined가 된다. (var는 호이스팅이 일어난다.)

// let
// console.log(word);
// word = 'hello';

// console.log(word);
// let word; // let은 호이스팅이 일어나지 않기 때문에 word는 ReferenceError가 된다. (let은 호이스팅이 일어나지 않는다.)

// const
// const b = 2; // const는 초기화 해야함 
// console.log(b);

// b = 3; // const는 재할당이 안됨 (const는 재할당이 안된다.)

// const PI = 3.14; // 보통 대문자로 작성해서 상수임을 명시하는 방식 많이 사용 

// // const로 선언된 변수에 할당된 객체 
// const student = {
//     grade: 1,
//     class: 2
// };
// student.grade = 2; // const로 선언된 변수에 할당된 객체의 프로퍼티는 변경이 가능하다. 
// console.log(student);
// // 객체 전체를 재할당은 불가능 

// // * var, let, const를 적절히 설계해야함 


// 화살표 함수 
// let plus = (a, b) => {
//     return a + b;
// };

// // 간략히 표현 
// let plus2 = (a, b) => a + b;

// console.log(plus(2, 3));

// let print = word => { // 매가변수가 하나인 경우 괄호 생략 가능 
//     console.log(word);
// }
// print('hello');

let myfunc = () => { // 파라미터 없을 떄 
    return 1;
}

console.log(myfunc());