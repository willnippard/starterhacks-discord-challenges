/*
Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
*/

const decodeRecursion = (chars, n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else if (chars[0] === '0') {
    return 0;
  }

  let count = 0;
  if (chars[n-1] > '0') {
    count = decodeRecursion(chars, n-1);
  }

  if (chars[n-2] === '1' || (chars[n-2] === '2' && chars[n-1] <= '6')) {
    count += decodeRecursion(chars, n-2);
  }

  return count;
};

const decode = (str) => console.log(decodeRecursion(str, str.length));

decode("226"); // 3
decode("12"); // 2
decode("2212"); // 5
decode("222"); // 3
decode("2222"); // 5
decode("22222"); // 8