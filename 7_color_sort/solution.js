/*
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/


const countingColorSort = arr => {
  let zCount = 0;
  let oCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zCount++;
    } else if (arr[i] === 1) {
      oCount++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (zCount > 0) {
      arr[i] = 0;
      zCount--;
    } else if (oCount > 0) {
      arr[i] = 1;
      oCount--;
    } else {
      arr[i] = 2;
    }
  }

  return arr;
};

const colorSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const counts = [0, 0];
  let temp = arr[0];
  let temp2 = -1;
  counts[temp] += 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) {
      temp = arr[counts[0]];
      arr[counts[0]] = arr[i];

      if (temp === 1) {
        temp2 = arr[counts[0] + counts[1]];
        arr[counts[0] + counts[1]] = temp;
        temp = temp2;
      }

      arr[i] = temp;
      counts[0] += 1;
    } else if (arr[i] === 1) {
      temp = arr[counts[0] + counts[1]];
      arr[counts[0] + counts[1]] = arr[i];
      arr[i] = temp;
      counts[1] += 1;
    }
  }

  return arr;
}

let input = [2,0,2,1,1,0,0,2,2,1,2,2,2,1,1,1,1,0,0,0];
console.log(countingColorSort(input));

input = [2,0,2,1,1,0,0,2,2,1,2,2,2,1,1,1,1,0,0,0];
console.log(colorSort(input));