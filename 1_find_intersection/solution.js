/*
  Examples:
  Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
  Output: 1,4,13
  Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
  Output: 1,9,10
*/

const findIntersection = (a1, a2) => {
  a1 = a1.split(',');
  a2 = a2.split(',');

  const result = [];
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a1[i] === a2[j]) {
        result.push(a1[i]);
      }
    }
  }

  return result;
};

const input = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
console.log(findIntersection(input[0], input[1]));