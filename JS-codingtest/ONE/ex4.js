// reverse 함수 구현
// main start!
arr = [1, 2, 3, 4, 5, 6];
console.log(solution(arr)); 

// main end!
function solution(arr) {
  let reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
	
  return reverseArr;
}
