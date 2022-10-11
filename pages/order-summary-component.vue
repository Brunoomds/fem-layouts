<template>
	<section
		class="bg-[hsl(225,100%,94%)] min-h-screen grid place-items-center p-4 font-['Red_Hat_Display'] bg-no-repeat bg-contain bg-[url(/projects/assets/order-summary-component/pattern-background-mobile.svg)] md:bg-[url(/projects/assets/order-summary-component/pattern-background-desktop.svg)]"
	>
		<div class="w-full max-w-sm rounded-2xl overflow-hidden text-[hsl(223,47%,23%)] text-center">
			<img src="/projects/assets/order-summary-component/illustration-hero.svg" alt="" />
			<div class="bg-white p-6 sm:p-8">
				<div class="space-y-2 mb-6">
					<h2 class="text-xl font-black">Order Summary</h2>
					<p class="text-sm text-[hsl(224,23%,55%)]">
						You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
						like!
					</p>
				</div>
				<div class="p-4 rounded-lg bg-[hsl(225,100%,98%)] flex justify-between items-center gap-4 text-sm mb-8">
					<div class="flex items-center gap-2">
						<img src="/projects/assets/order-summary-component/icon-music.svg" alt="" class="h-10" />
						<div class="text-left">
							<h2 class="font-black">Annual Plan</h2>
							<p class="text-[hsl(224,23%,55%)]">$59.99/year</p>
						</div>
					</div>
					<button
						class="underline font-bold text-[hsl(245,75%,52%)] hover:text-opacity-70 hover:no-underline transition-colors duration-300 focus-visible:outline outline-[hsl(224,23%,55%)] outline-offset-2"
					>
						Change
					</button>
				</div>
				<div class="flex flex-col items-center gap-6 text-sm">
					<button
						class="bg-[hsl(245,75%,52%)] text-white w-full font-black py-3 rounded-xl shadow-xl shadow-[hsl(245,75%,52%)]/20 hover:bg-opacity-70 transition-colors duration-300 focus-visible:outline outline-[hsl(224,23%,55%)] outline-offset-2"
					>
						Proceed to Payment
					</button>
					<button
						class="font-black text-[hsl(224,23%,55%)] hover:text-inherit p-2 transition-colors duration-300 focus-visible:outline outline-[hsl(224,23%,55%)] outline-offset-2"
					>
						Cancel Order
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<!--
- Pale blue: hsl(225,100%,94%)
- Bright blue: hsl(245,75%,52%)
- Very pale blue: hsl(225,100%,98%)
- Desaturated blue: hsl(224,23%,55%)
- Dark blue: hsl(223,47%,23%)

- Family: [Red Hat Display](https://fonts.google.com/specimen/Red+Hat+Display)
- Weights: 500, 700, 900
-->
