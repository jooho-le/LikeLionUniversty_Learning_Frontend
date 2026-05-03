let el = document.getElementById('birthday'); 
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');
// id로 요소를 선택해서 변수에 할당

const today = new Date(); // 오늘 날짜를 가져오는 Date 객체 생성

function calculateAge() {

    let birthday = new Date(el.value); // 입력된 생년월일을 Date 객체로 변환
    let age;

    if (today.getMonth() > birthday.getMonth() || 
    (today.getMonth() == birthday.getMonth() && 
    today.getDate() >= birthday.getDate())) // 오늘이 생일 이후인지 확인
    {
        age = today.getFullYear() - birthday.getFullYear(); // 생일이 지났으면 현재 년도에서 출생 년도 빼기
    } else {
        age = today.getFullYear() - birthday.getFullYear() - 1; // 생일이 지나지 않았으면 현재 년도에서 출생 년도 빼기 - 1
    }

    elResult.innerText = `만 나이는 ${age}세 입니다`; // 결과를 화면에 출력

    return age;
}

elSubmit.addEventListener('click', calculateAge); // 버튼 클릭 시 calculateAge 함수 실행