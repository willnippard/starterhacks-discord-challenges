const LongestSubstring = str => {
	let maxLen = 0;

	for (let i = 0; i < str.length; i++) {
		const startingChar = str[i];
		let currLen = 1;

		for (let j = i + 1; j < str.length; j++) {
			const c = str[j];

			// Matching char
			if (startingChar === c) {
				if (currLen > maxLen) {
					maxLen = currLen;
				}
				break;
			}

			currLen += 1;
		}
	}

	return maxLen;
};

console.log(LongestSubstring("abcabcbb"));
console.log(LongestSubstring("bbbbb"));
console.log(LongestSubstring("pwwkew"));
