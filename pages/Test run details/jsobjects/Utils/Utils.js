export default {
	automatedStatusColors: {
		"false": "#FF0000",
		"true": "#00FF00",
		"na": "#F5F5F5"
	},
	automatedStatusIcon: {
		"false": "cross",
		"true": "confirm",
		"na": "cross"
	},
	automatedStatusImage: {
		"false": "❌",
		"true": "✅",
		"na": ""
	},
	autoStatus:
	{

		"https://image.similarpng.com/very-thumbnail/2021/06/Cross-mark-icon-in-red-color-on-transparent-background-PNG.png" : "false",
		"https://image.similarpng.com/very-thumbnail/2021/06/Green-check-mark-icon-on-transparent-background-PNG.png" : "true",	
	},


	generateRandomColor() {
		return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
	},
	generateColorForString(inputString) {
		// Hash the string to create a consistent value
		let hash = 0;
		for (let i = 0; i < inputString.length; i++) {
			hash = inputString.charCodeAt(i) + ((hash << 5) - hash);
		}
		// Convert the hash to a hex color
		let color = "#";
		for (let i = 0; i < 3; i++) {
			color += ("00" + ((hash >> (i * 8)) & 0xFF).toString(16)).slice(-2);
		}
		return color;
	},
	async generateColorsForArray() {
		let inputArray =  JSObject1.fetchAllCases()
		const colors = {};
		inputArray.forEach(value => {
			// Hash the string
			let hash = 0;
			for (let i = 0; i < value.length; i++) {
				hash = value.charCodeAt(i) + ((hash << 5) - hash);
			}
			// Convert the hash to a hex color
			let color = "#";
			for (let i = 0; i < 3; i++) {
				color += ("00" + ((hash >> (i * 8)) & 0xFF).toString(16)).slice(-2);
			}
			colors[value] = color;
		});
		return colors;

		},
	async assignColorsToData() {
		let data = await FetchLabels.run()
		return data.map(item => {
			const name = item.name;
			// Generate a hash-based color for the name
			let hash = 0;
			for (let i = 0; i < name.length; i++) {
				hash = name.charCodeAt(i) + ((hash << 5) - hash);
			}
			// Convert hash to a hex color
			let color = "#";
			for (let i = 0; i < 3; i++) {
				color += ("00" + ((hash >> (i * 8)) & 0xFF).toString(16)).slice(-2);
			}
			return { name, colorValue: color };

		});
	},

	async reformJson() {
		// Fetch the data asynchronously
		let data = await this.assignColorsToData();

		// Use reduce to transform the data into the desired format
		const result = data.reduce((result, item) => {
			result[item.name] = item.colorValue;
			return result;
		}, {});  // Initialize the result object as an empty object

		// Return the transformed result object
		return result;
	}
}