<template>
	<section class="bg-[hsl(216,12%,8%)] min-h-screen grid place-items-center p-4 font-[Overpass] text-white">
		<div
			class="rounded-3xl bg-[hsl(213,19%,18%)] relative overflow-hidden before:content-[''] before:absolute before:[background:radial-gradient(circle_at_top,transparent,rgba(0,0,0,0.2),rgba(0,0,0,0.34))] before:inset-0 w-full max-w-md shadow-xl"
		>
			<div v-show="!thankYou" class="relative space-y-8 p-8">
				<div class="p-4 shadow-md rounded-full bg-[hsl(213,19%,18%)] w-fit">
					<img
						src="/projects/assets/interactive-rating-component/icon-star.svg"
						alt=""
						class="w-4 aspect-square"
					/>
				</div>
				<div class="space-y-2">
					<h2 class="text-2xl sm:text-3xl font-bold">How did we do?</h2>
					<p class="text-[hsl(216,12%,54%)]">
						Please let us know how we did with your support request. All feedback is appreciated to help us
						improve our offering!
					</p>
				</div>
				<div class="flex items-center gap-3 sm:gap-5">
					<button
						v-for="rating in 5"
						@click="activeRating === rating ? (activeRating = null) : (activeRating = rating)"
						class="w-full aspect-square grid place-items-center rounded-full bg-[hsl(213,19%,18%)] hover:bg-[hsl(216,12%,54%)] transition-colors duration-300 focus-visible:outline outline-2 outline-[hsl(217,12%,63%)]"
						:class="{ '!bg-[hsl(25,97%,53%)]': activeRating === rating }"
					>
						<p class="mt-0.5 sm:text-lg">{{ rating }}</p>
					</button>
				</div>
				<button
					@click="submitRating()"
					class="p-3 bg-[hsl(25,97%,53%)] w-full rounded-full font-bold tracking-widest shadow-md hover:bg-white hover:text-[hsl(25,97%,53%)] transition-[background-color,color,opacity] duration-500 focus-visible:outline outline-2 outline-[hsl(217,12%,63%)]"
					:class="{ 'opacity-25 pointer-events-none': !activeRating }"
				>
					<p class="mt-0.5">SUBMIT</p>
				</button>
			</div>
			<div v-show="thankYou" class="relative space-y-10 px-8 py-12 text-center">
				<img
					src="/projects/assets/interactive-rating-component/illustration-thank-you.svg"
					alt=""
					class="mx-auto"
				/>
				<div class="bg-[hsl(213,19%,18%)] px-6 py-2 rounded-full w-fit mx-auto">
					<p class="mt-0.5 text-[hsl(25,97%,53%)] text-sm sm:text-base">
						You selected {{ activeRating }} out of 5
					</p>
				</div>
				<div class="space-y-4">
					<h2 class="text-2xl sm:text-3xl font-bold">Thank you!</h2>
					<p class="text-[hsl(216,12%,54%)]">
						We appreciate you taking the time to give a rating. If you ever need more support, don't
						hesitate to get in touch!
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			activeRating: null,
			thankYou: false,
		}
	},
	methods: {
		submitRating() {
			if (this.activeRating) this.thankYou = true
		},
	},
}
</script>

<!--
- Orange: hsl(25,97%,53%)
- Light Grey: hsl(217,12%,63%)
- Medium Grey: hsl(216,12%,54%)
- Dark Blue: hsl(213,19%,18%)
- Very Dark Blue: hsl(216,12%,8%)

- Family: [Overpass](https://fonts.google.com/specimen/Overpass)
- Weights: 400, 700
-->
