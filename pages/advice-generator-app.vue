<template>
	<section class="bg-[hsl(218,23%,16%)] min-h-screen grid place-items-center p-4">
		<div
			class="bg-[hsl(217,19%,24%)] w-full max-w-sm sm:max-w-lg p-10 pb-0 rounded-2xl shadow-xl font-extrabold font-[Manrope] text-center"
		>
			<div class="flex flex-col gap-6">
				<p class="text-[hsl(150,100%,66%)] text-sm tracking-[0.2em]">ADVICE #{{ advice.id }}</p>
				<p class="text-[hsl(193,38%,86%)] text-2xl whitespace-pre-wrap">"{{ advice.advice }}"</p>
				<picture>
					<source
						media="(min-width: 640px)"
						srcset="/projects/assets/advice-generator-app/pattern-divider-desktop.svg"
					/>
					<img src="/projects/assets/advice-generator-app/pattern-divider-mobile.svg" alt="" class="w-full" />
				</picture>
			</div>
			<button
				@click="generateAdvice()"
				class="bg-[hsl(150,100%,66%)] p-4 rounded-full translate-y-1/2 transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(150,100%,66%)]"
			>
				<img src="/projects/assets/advice-generator-app/icon-dice.svg" alt="" />
			</button>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			advice: {},
		}
	},
	methods: {
		generateAdvice() {
			fetch('https://api.adviceslip.com/advice')
				.then((response) => response.json())
				.then((data) => (this.advice = data.slip))
				.catch(() => (this.advice.advice = `Sometime things doesn't work as we expect...`))
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
