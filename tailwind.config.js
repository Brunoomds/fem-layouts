/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColors = require('tailwindcss/colors')

module.exports = {
	content: [
		`components/**/*.{vue,js}`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`composables/**/*.{js,ts}`,
		`plugins/**/*.{js,ts}`,
		`App.{js,ts,vue}`,
		`app.{js,ts,vue}`,
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
				serif: ['Damion', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
}
