// Expected result :  [7, 7, 7, 6, 92, 11]
// Direction : copy arr1 last three of element without removing default length and fill the rest value with 7

const arr1 = [12, 24, 51, 6, 92, 11];

function result(arr1) {
  // Your Code Here
    let result=[];
    for (i=0; i < arr1.length; i++) {
        (i<3)?result.push(7):result.push(arr1[i]);
    }
    return result;
}

console.log(result(arr1));