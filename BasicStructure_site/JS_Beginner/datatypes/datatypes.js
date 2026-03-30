/* 자료형

1. 기본형, 단순형, 원시형
- num
- string
- boolean
- undefined
- null
- symbo;

2. 참조형, 객체(object)

*/

// number
// 정수, 실수 구분이 없음 
var price = 100000;
console.log(price);

// string
// "" '' 둘다 가능 
var myname = "이주호";
console.log(myname);
var myname2 = '멋사';
console.log(myname2); 
var myname3 = "'멋표'";
console.log(myname3); 
var myname4 = "\"사자\"";
console.log(myname4); 

// boolean
// var isTrue = True; // 대문자 오류발생 
var isTrue = true;
console.log(isTrue)
var isFalse = false;
console.log(isFalse);

// undefined
// 변수 선언 후 값을 할당하지 않은 것 
var a;
console.log(a);