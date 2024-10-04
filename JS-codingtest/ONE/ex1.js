// 1. 배열에서 중복값을 처리하기
// ex. [1,1,2,3,2,4]->[1,2,3,4]
// main start!

arr = [1, 1, 2, 3, 2, 4]; // TC no.1
console.log(solution(arr));

// main end!

function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let duplication = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] == result[j]) {
				//중복이면 break
        duplication = true;
        break;
      }
    }

    // 중복이 아니면 result에 추가
    if (!duplication) {
      result.push(arr[i]);
    }
  }

  return result;
}
