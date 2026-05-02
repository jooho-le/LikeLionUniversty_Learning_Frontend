// 배열 
// 배열은 객체처럼 다루어 진다 
// 키 -> 인덱스 대응
// 값 -> 요소에 대응
var mbti = ['ENFP', 'INFP', 'INFJ', 'INTJ'];
// console.log(mbti[1]);
// console.log(mbti.length);

// // 요소 추가 
// mbti[4] = 'ENFJ';
// console.log(mbti);
// console.log(mbti.length);

// // 덮어씌우기
// mbti[0] = 'ENTP';
// console.log(mbti);

// push 메서드 : 배열의 끝에 요소 추가
// mbti.push('ifsp', 'ifsj');
// console.log(mbti);
// console.log(mbti.length);

// 스프레드 문법 : 배열을 펼쳐서 요소 하나하나로 만들어줌
// var newMbti = [...mbti, 'aaaa', 'bbbb'];
// console.log(newMbti);
// console.log(newMbti.length);

// pop 메서드 : 배열의 끝에 요소 제거
// mbti.pop();
// console.log(mbti);
// console.log(mbti.length);

// unshift 메서드 : 배열의 앞에 요소 추가
// mbti.unshift('aaaa', 'bbbb');
// console.log(mbti);
// console.log(mbti.length);

// 스프레드 문법 : 배열을 펼쳐서 요소 하나하나로 만들어줌
// var newMbti = ['aaaa', 'bbbb', ...mbti];
// console.log(newMbti);
// console.log(newMbti.length);

// shift 메서드 : 배열의 앞에 요소 제거
// mbti.shift();
// console.log(mbti);
// console.log(mbti.length);