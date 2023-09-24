import { colors } from "@unocss/preset-mini";
let colorArray = [];

for (const colorClass in colors) {
	console.log(`"${colorClass}": {`);
	for (const shade in colors[colorClass]) {
		if (
			shade === "50" ||
			shade === "100" ||
			shade === "300" ||
			shade === "400" ||
			shade === "500" ||
			shade === "600" ||
			shade === "700" ||
			shade === "800" ||
			shade === "900" ||
			shade === "950"
		)
			console.log(`"${shade}": "${colors[colorClass][shade]}",`);
	}
	console.log(`},`);
}
// Object.entries(colors).forEach((color) => {
// colorArray.push(JSON.stringify(color));
// console.log(JSON.stringify(color));
// });
