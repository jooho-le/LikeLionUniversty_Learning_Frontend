/*
연산자 
- 1개의 표현식에 대해 산술, 대입, 논리, 타입 등을 평가하여 값을 생성하는 작업 
*/

// 1. 산술 연산자 
// var a = 10;
// var b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// console.log(a);

// var c = 7;
// console.log(++c);
// console.log(c++);
// console.log(c);
// console.log(c--)
// console.log(c);

// 2. 대입 연산자 
// var d = 2;
// // d = 10; // 덮어씌움 
// // console.log(d);
// console.log(d += 3);
// console.log(d -= 3);
// console.log(d *= 3);
// console.log(d /= 3);
// console.log(d %= 3);

// 3. 비교 연산자 
// console.log(2 == 2);
// console.log(2 == "2"); // 값이 같으면 true 반환 , 자바스크립 엔진이 타입 변환을 시도 - 암묵적 형변환
// console.log(2 === "2"); // 값과 타입이 모두 같아야 true 반환 - 엄격한 비교 연산자

// console.log(2 != 2);
// console.log(2 != "2"); // 값이 다르면 true 반환 
// console.log(2 !== "2"); // 값과 타입이 모두 다르면 true 반환

// console.log(4 > 2);
// console.log(4 < 2);
// console.log(4 >= 2);
// console.log(4 <= 2);

// 4. 논리 연산자 
// // 논리합 : 피연산자 중 하나라도 참이면 참 
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log(2>3 || 5 == 5); // 앞에서부터 평가해서 반환 

// // 논리곱 : 피연산자 모두가 참이어야 참 
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// console.log(2>3 || 5 == 5); // 앞에서부터 평가해서 반환

// // 부정 : 피연산자의 boolean값을 부정 
// console.log(!true);
// console.log(!false);
// console.log(!(5>4));

// 5. typeof 연산자 
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol());

console.log(typeof null); // object 반환 - 자바스크립트의 버그
// 보통 typeof보다 == 을 사용 


