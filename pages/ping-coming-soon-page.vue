<template>
	<div class="font-['Libre_Franklin'] min-h-screen grid place-items-center py-14">
		<div class="container px-8 max-w-sm sm:max-w-2xl text-center space-y-12">
			<img src="/frontendmentor/imgs/ping-coming-soon-page/logo.svg" alt="" class="mx-auto" />
			<div class="space-y-6">
				<div class="space-y-2">
					<p class="text-2xl sm:text-4xl text-[hsl(0,0%,59%)]">
						We are Launching <span class="text-[hsl(209,33%,12%)] font-bold">soon!</span>
					</p>
					<p class="text-[hsl(209,33%,12%)]">Subscribe and get notified</p>
				</div>
				<form class="flex flex-col sm:flex-row gap-2" @submit.prevent="submitForm">
					<div class="w-full relative">
						<input
							v-model="payload.email"
							type="email"
							@focus="validEmail = true"
							placeholder="Your email address..."
							class="px-8 sm:px-6 py-3 w-full text-sm sm:text-base border rounded-full outline-none focus:border-[hsl(0,0%,59%)]"
							:class="{ 'border-[hsl(354,100%,66%)]': !validEmail }"
						/>
						<p
							v-show="!validEmail"
							class="text-xs italic text-[hsl(354,100%,66%)] sm:absolute left-6 bottom-0 mt-2 sm:translate-y-[calc(100%+8px)]"
						>
							Please provide a valid email address
						</p>
					</div>
					<button
						type="submit"
						class="bg-[hsl(223,87%,63%)] hover:bg-opacity-80 transition-colors duration-300 shrink-0 p-3 sm:px-14 rounded-full font-semibold text-white text-sm sm:text-base shadow-lg shadow-[hsl(223,87%,63%)]/25"
					>
						Notify Me
					</button>
				</form>
			</div>
			<img src="/frontendmentor/imgs/ping-coming-soon-page/illustration-dashboard.png" alt="" />
			<div class="space-y-8">
				<div class="flex justify-center items-center gap-2">
					<a
						href="#"
						class="p-2 border border-[hsl(223,100%,88%)] hover:border-[hsl(223,87%,63%)] hover:bg-[hsl(233,87%,63%)] rounded-full fill-[hsl(223,87%,63%)] hover:fill-white transition-colors duration-300"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4">
							<path
								d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
							/>
						</svg>
					</a>
					<a
						href="#"
						class="p-2 border border-[hsl(223,100%,88%)] hover:border-[hsl(223,87%,63%)] hover:bg-[hsl(233,87%,63%)] rounded-full fill-[hsl(223,87%,63%)] hover:fill-white transition-colors duration-300"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4">
							<path
								d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
							/>
						</svg>
					</a>
					<a
						href="#"
						class="p-2 border border-[hsl(223,100%,88%)] hover:border-[hsl(223,87%,63%)] hover:bg-[hsl(233,87%,63%)] rounded-full fill-[hsl(223,87%,63%)] hover:fill-white transition-colors duration-300"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4">
							<path
								d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
							/>
						</svg>
					</a>
				</div>
				<p class="text-[hsl(0,0%,59%)] text-sm">© Copyright Ping. All rights reserved.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			payload: { email: '' },
			validEmail: true,
		}
	},
	methods: {
		submitForm(event) {
			const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
			this.validEmail = emailRegExp.test(this.payload.email)

			if (this.validEmail) alert('Thank you for subscribing!'), event.target.submit()
		},
	},
}
</script>

<!--
- Blue: hsl(223,87%,63%)
- Pale Blue: hsl(223,100%,88%)
- Light Red: hsl(354,100%,66%)
- Gray: hsl(0,0%,59%)
- Very Dark Blue: hsl(209,33%,12%)

- Family: [Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin)
- Weights: 300, 600, 700
-->
