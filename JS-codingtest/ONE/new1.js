// 최대공약수와 최소공배수
// main start!

n = 3; // TC no.1
m = 12; // TC no.1
// n = 2;  // TC no.2
// m = 5;  // TC no.2
console.log(solution(n, m));

// main end!

function solution(n, m) {
  let GCD; //최대공약수
  let LCM; //최소공배수

  let smaller;
  if (n < m) {
    smaller = n;
  } else {
    smaller = m;
  }

  // 최대공약수 찾기
  // 최대공약수는 두 수 중 작은 숫자 이상은 나올 수 없으니까 smaller만큼 반복
  for (let i = 1; i <= smaller; i++) {
    if (n % i == 0 && m % i == 0) { // 나머지가 0일 때의 가장 큰 n 값 = 최대공약수
      GCD = i;
    }
  }

  // 최소공배수(두 수의 곱 / 최대공약수)
  LCM = (n * m) / GCD;

  return [GCD, LCM];
}
