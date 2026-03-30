/*
객체
- 속성의 모음으로 이루어진 데이터 
- 속성에는 어떤 데이터 타입이라도 할당 가능 
- 속성의 구분 : ,
- 속성의 정의 : 속성명(키): 속성값(값)
*/

// 하나의 속성에 다양한 자료형 관리

var student = {
    grade: 1,
    school: "lion school",
}

console.log(student);
console.log(typeof(student)); // 변수의 타입을 알려줌 

// 객체의 값 호출 
var gradeInfo = student.grade;
console.log(gradeInfo)

console.log(student['grade']);

// 객체의 키 호출 
var key = Object.keys(student); // 전체 키를 반환 
console.log(key);

var key2 = Object.keys(student)[0]; // 특정 키 반환 
console.log(key2);

// 객체에 속성 추가 
student.class = 3;
console.log(student);

// 비어있는 객체 선언 
var teacher = new Object(); // 이 방식도 있긴한데 잘 안씀 

var teacher = {

};