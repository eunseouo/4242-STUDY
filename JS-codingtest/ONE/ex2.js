// 2. 정렬하기 with 버블소팅. 단 sort쓰기 금지)
// main start!

arr = [1, 1, 2, 3, 2, 4]; // TC no.1
console.log(solution(arr));

// main end!

function solution(arr) {
  let n = arr.length; 

  // 버블 소트 알고리즘
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

