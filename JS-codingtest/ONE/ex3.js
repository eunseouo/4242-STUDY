// 3.배열 안의 숫자 개수 세기
// main start!

arr = [1, 1, 2, 3, 2, 4]; // TC no.1
console.log(solution(arr));

// main end!

function solution(arr) {
  const obj = {}; 

  for (let num of arr) {  //num은 배열의 숫자를 돎
    if (obj[num]) {
      obj[num] += 1; // 숫자가 기존에 존재하면 +1
    } else {
      obj[num] = 1; // 숫자가 없으면 1 유지
    }
  }

  for (let num in obj) {
    console.log(`${num} ---- ${obj[num]}개`);
  }

  return obj; 
}
