function extendHex(shortHex) {
  // Remove # if present and convert to uppercase
  shortHex = shortHex.replace(/^#/, "").toUpperCase();

  // Ensure the input is a valid short hex code
  if (!/^[0-9A-F]{3}$/i.test(shortHex)) {
    throw new Error("Invalid short hex code");
  }

  // Convert short hex to full hex
  const fullHex = shortHex
    .split("")
    .map((char) => char.repeat(2))
    .join("");

  // Add # prefix and return the full hex code
  return "#" + fullHex;
}

// const extendHex = (shortHex) => {
//   // write your code here
// 	let i = shortHex.length - 3;
// 	let isCapital = false;
// 	let output = "#";
// 	for (let i = 0; i < shortHex.length; i++) {
// 		let asciiCode = shortHex.charAt(i);
// 		if (asciiCode >= 97 && asciiCode <= 122) {
// 			isCapital = true;
// 		}
// 		output += shortHex[i] + shortHex[i];
// 		i++;
// 	}
// };

// return isCapital ? output.toUpperCase() : output;
// // Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
