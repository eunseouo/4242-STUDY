// replace함수 직접 구현
// [1, 2, 3, 4, 5, 6] =>[1, 2, 30, 40, 5, 6]
// main start!

arr = [1, 2, 3, 4, 5, 6];
console.log(solution(arr)); 

// main end!

function solution(arr) {
  let second = arr[2] * 10;
  let third = arr[3] * 10;

  // 2,3 인덱스의 값을 수정
  arr[2] = second;
  arr[3] = third;

  return arr;
}

//이게 아닌가... 너무 쉬운게 수상한데...
