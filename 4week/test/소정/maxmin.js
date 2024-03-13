//값을 입력 받아 box 에 넣기
var box1_value = prompt('첫 번째 값을 입력해주세요');
console.log(box1_value);
document.getElementsByClassName('.box1').textContent = box1_value.value;
// div 박스에 안들어감.ㅡㅡ

var box2_value = prompt('두 번째 값을 입력해주세요');
console.log(box2_value);
document.getElementsByClassName('.box2').textContent = box2_value;

var box3_value = prompt('세 번째 값을 입력해주세요');
console.log(box3_value);
document.getElementsByClassName('.box3').textContent = box3_value;

function Comparison() {
  //입력받은 값을 숫자로 변환함  parseint 안되면 number로 헤보셈
  var box1_value = Number(document.querySelector('.box1').textContent);
  var box2_value = Number(document.querySelector('.box2').textContent);
  var box3_value = Number(document.querySelector('.box3').textContent);
  console.log(box1_value, box2_value, box3_value);
  var max, min;

  //if 문으로 대소비교
  if (box1_value > box2_value) {
    max = box1_value;
    min = box2_value;
  } else {
    max = box2_value;
    min = box1_value;
  }

  if (box3_value > max) {
    max = box3_value;
  } else if (box3_value < min) {
    min = box3_value;
  }
  console.log(max);
  console.log(min);

  var result = '가장 큰 수는 ' + max + ',가장 작은 수는 ' + min;

  //결과 출력
  document.querySelector('input[type="text"]').value = result;
}
