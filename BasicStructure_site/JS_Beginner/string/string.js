// 문자열 선언 
// var greeting = "hello";
// var farewell = 'bye' + 1; 
// var myname = '이멋사';

// var sentence = greeting + '\n' + myname;
// console.log(sentence);

// console.log(farewell + 2); // 문자열과 숫자 연산 -> 문자열로 변환되어서 연산됨

// 이스케이프 시퀀스
// var sentence = greeting + '\n' + myname;
// var sentence = greeting + '\t' + myname;
// var sentence = greeting + '\'' + myname;
// var sentence = greeting + '\"' + myname;
// var sentence = greeting + '\\' + myname;
// console.log(sentence);

// 템플릿 리터럴
// 멀티라인 텍스트 작업 가능 , 이스케이스 시퀀스 안써도 가능 
// var a = `hello`;
// console.log(a);

// var b = `bye
// everyone`;
// console.log(b);

// var price = 100;
// var b = '이 물건은' + price + '원';
// console.log(b);

// var c = `이 물건은 ${price}원`;
// console.log(c);

// var d = `이 물건은 ${200 + 200}원`; // 변수말고 연산도 가능 
// console.log(d);

// 문자열 함수
var abc = 'i am a lion';
// indexOf(); // 문자열에서 특정 문자나 문자열이 처음으로 나타나는 위치 반환
console.log(abc.indexOf('lion')); 
console.log(abc.indexOf('i'));

// slice(); // 문자열의 일부분을 추출하여 반환
console.log(abc.slice(4));
console.log(abc.slice(0,3)); // 0부터 2까지 추출

// toUpperCase(); // 문자열을 대문자로 변환하여 반환
// toLowerCase(); // 문자열을 소문자로 변환하여 반환
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// startWith(); // 문자열이 특정 문자나 문자열로 시작하는지 여부를 반환
// endWith(); // 문자열이 특정 문자나 문자열로 끝나는지 여부를 반환
console.log(abc.startsWith('i'));
console.log(abc.endsWith('lion'));

// includes(); // 문자열이 특정 문자나 문자열을 포함하는지 여부를 반환
console.log(abc.includes('am'));
console.log(abc.includes('you'));