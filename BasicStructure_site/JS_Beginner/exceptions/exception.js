// 예외(에러)처리

try {
    // 예외가 발생할 가능성이 있는 코드
    throw new Error('에러발생'); // 강제로 에러를 발생시키는 코드
} catch (error) {
    // 예외가 발생했을 때 실행할 코드
    console.log('에러발생');
    console.log(error.message);
} finally {
    // 예외 발생 여부와 상관없이 항상 실행할 코드
    console.log('무조건 실행');
}