<template>
	<div class="bg-[hsl(218,23%,16%)] min-h-screen grid place-items-center p-4 font-[Manrope] text-center">
		<div class="bg-[hsl(217,19%,24%)] w-full max-w-sm sm:max-w-lg p-10 pb-0 rounded-2xl shadow-xl font-extrabold">
			<div class="space-y-6">
				<p class="text-[hsl(150,100%,66%)] text-sm tracking-[0.2em]">ADVICE #{{ advice.id }}</p>
				<p class="text-2xl text-[hsl(193,38%,86%)] whitespace-pre-wrap">"{{ advice.advice }}"</p>
				<img
					src="/projects/imgs/advice-generator-app/pattern-divider-desktop.svg"
					alt=""
					class="hidden sm:block w-full"
				/>
				<img
					src="/projects/imgs/advice-generator-app/pattern-divider-mobile.svg"
					alt=""
					class="sm:hidden w-full"
				/>
			</div>
			<button
				@click="generateAdvice()"
				class="bg-[hsl(150,100%,66%)] p-4 rounded-full translate-y-1/2 cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(150,100%,66%)]"
				:class="{ 'pointer-events-none': loading }"
			>
				<img src="/projects/imgs/advice-generator-app/icon-dice.svg" alt="" />
			</button>
			<svg
				v-show="loading"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				class="w-8 fixed right-8 top-8 fill-transparent stroke-[hsl(150,100%,66%)]"
			>
				<circle cx="50" cy="50" stroke-width="8" r="40" stroke-dasharray="190">
					<animateTransform
						attributeName="transform"
						type="rotate"
						repeatCount="indefinite"
						values="0 50 50;360 50 50"
						dur="800ms"
					></animateTransform>
				</circle>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			advice: {},
			loading: false,
		}
	},
	methods: {
		generateAdvice() {
			this.loading = true
			fetch('https://api.adviceslip.com/advice')
				.then((response) => response.json())
				.then((data) => {
					this.advice = data.slip
					setTimeout(() => (this.loading = false), 2000)
				})
				.catch(() => {
					this.advice.advice = `Sometime things doesn't work as we expect...`
					this.loading = false
				})
		},
	},
	mounted() {
		this.generateAdvice()
	},
}
</script>

<!--
- Light Cyan: hsl(193,38%,86%)
- Neon Green: hsl(150,100%,66%)
- Grayish Blue: hsl(217,19%,38%)
- Dark Grayish Blue: hsl(217,19%,24%)
- Dark Blue: hsl(218,23%,16%)

- Family: [Manrope](https://fonts.google.com/specimen/Manrope)
- Weights: 800
-->
