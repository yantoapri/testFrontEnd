// Direction : For each value inside the array, get the next smallest prime number value greater than the input number, if input number is already prime return that input
// For example: Input: 4, Expected: 5, Input: 14, Expected: 17, Input: 2, Expected: 2
// Expected: [2, 5, 19, 23, 37, 89]
const number1 = [2, 4, 18, 20, 35, 84];
const answer = [];
const isPrime = (num) => {
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num !== 1;
    for(let i = 2; i < sqrtnum + 1; i++){
        if(num % i === 0){
          prime = false;
          break;
        };
    };
    return prime;
 }
function result(num) {
  // Your Code Here
  num.forEach(val => {
      if(val>1){
        if(isPrime(val)){
          answer.push(val);
        }else{
          let num=val;
          while(!isPrime(++num)){
          }
          answer.push(num);
        }
      }
  });
  return answer;
}

console.log(result(number1));