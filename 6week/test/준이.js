

function MaxOrMin(numbers) {
  //숫자 입력이 비어있을 경우 "숫자를 다시 입력해주세요." 출력
  if (numbers === "") {
    return "숫자를 다시 입력해주세요.";
  }

  const arr = numbers.split(' ');
  for (i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }

  let max = arr[0];
  let min = arr[0];

  //최댓값과 최솟값 찾기
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    } else if (min > arr[i]) {
      min = arr[i]
    }
  }

  //결과 반환
  return "최댓값은 " + max+  ", 최솟값은" + min ;
}

  const numbersInput = "1 23 5 100 7";
  console.log(MaxOrMin(numbersInput));