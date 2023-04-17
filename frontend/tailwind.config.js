/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"level-1-blue": "#0B2447",
				"level-2-blue": "#19376D",
				"level-3-blue": "#576CBC",
				"level-4-blue": "#A5D7E8",
				"color-1": "#006466",
				"color-2": "#065A60",
				"color-3": "#0B525B",
				"color-4": "#144552",
				"color-5": "#1B3A4B",
				"color-6": "#212F45",
				"color-7": "#272640",
				"color-8": "#312244",
				"color-9": "#3E1F47",
				"color-10": "#4D194D"
			},
		},
	},
	plugins: [],
}

