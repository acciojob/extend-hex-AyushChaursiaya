const extendHex = (shortHex) => {
  // write your code here
	let i = shortHex.length - 3;
	let isCapital = false;
	let output = "#";
	for (let i = 0; i < shortHex.length; i++) {
		let asciiCode = shortHex[i].charAt(i);
		if (asciiCode >= 97 && asciiCode <= 122) {
			isCapital = true;
		}
		output += shortHex[i] + shortHex[i];
		i++;
	}
};

return isCapital ? output.toUpperCase() : output;
// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
