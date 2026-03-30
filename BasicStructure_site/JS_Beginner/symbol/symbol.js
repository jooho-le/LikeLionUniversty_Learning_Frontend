var name1 = "김멋사";
var name2 = "김멋사";

console.log(name1 == name2); // true 반환 

// 같은 값을 가진 변수를 다르게 구분하고싶을때 
var name3 = Symbol("이멋사");
var name4 = Symbol("이멋사");

console.log(name3 == name4); // false 반환

var myclass = {
    [Symbol("이멋사")]: 1,
    [Symbol("이멋사")]: 2
}
// 개별적으로 취급됨 

// symbol의 가장 중요한거 -> 고유하다 