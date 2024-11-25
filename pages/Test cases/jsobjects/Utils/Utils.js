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
		"false": "https://image.similarpng.com/very-thumbnail/2021/06/Cross-mark-icon-in-red-color-on-transparent-background-PNG.png",
		"true": "https://image.similarpng.com/very-thumbnail/2021/06/Green-check-mark-icon-on-transparent-background-PNG.png",
		"na": ""
	},
	autoStatus:
	{
	
		 "https://image.similarpng.com/very-thumbnail/2021/06/Cross-mark-icon-in-red-color-on-transparent-background-PNG.png" : "false",
		"https://image.similarpng.com/very-thumbnail/2021/06/Green-check-mark-icon-on-transparent-background-PNG.png" : "true",	
	},
	severityColors: {
    "emergency": "#8B008B",
    "critical": "#FF4500",
    "high": "#FFA500",
    "medium": "#FFFF00",
    "normal": "#B0E0E6",
    "low": "#B0E0E6",
		"na": "#F5F5F5"
  },
	tierColors: {
		"enterprise_edition": "#FFB6C1",
		"trial_enterprise": "#FFDAB9",
		"business_edition": "#FFD700",
		"trial_business": "#FFECB3",
		"community": "#B2DFEE",
		"na": "#F5F5F5"
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
	generateColorsForArray(inputArray) {
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
}
}