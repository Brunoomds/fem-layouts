<template>
	<div class="bg-[hsl(0,0%,95%)] min-h-screen grid place-items-center p-4 font-['Lexend_Deca']">
		<div class="grid md:grid-cols-3 w-full max-w-sm md:max-w-4xl text-white/95 rounded-xl overflow-hidden">
			<div class="bg-[hsl(31,77%,52%)] p-12 flex flex-col justify-between items-start gap-8 md:gap-20">
				<div class="space-y-8">
					<img src="/projects/imgs/3-column-preview-card-component/icon-sedans.svg" alt="" />
					<h2 class="font-['Big_Shoulders_Display'] text-4xl">SEDANS</h2>
					<p class="text-white/75">
						Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
						or on your next road trip.
					</p>
				</div>
				<button
					class="bg-white hover:bg-transparent hover:text-white border-2 border-white transition-colors duration-300 px-8 py-3 text-sm md:text-base rounded-full text-[hsl(31,77%,52%)]"
				>
					Learn More
				</button>
			</div>
			<div class="bg-[hsl(184,100%,22%)] p-12 flex flex-col justify-between items-start gap-8 md:gap-20">
				<div class="space-y-8">
					<img src="/projects/imgs/3-column-preview-card-component/icon-suvs.svg" alt="" />
					<h2 class="font-['Big_Shoulders_Display'] text-4xl">SUVS</h2>
					<p class="text-white/75">
						Take an SUV for its spacious interior, power, and versatility. Perfect for your next family
						vacation and off-road adventures.
					</p>
				</div>
				<button
					class="bg-white hover:bg-transparent hover:text-white border-2 border-white transition-colors duration-300 px-8 py-3 text-sm md:text-base rounded-full text-[hsl(184,100%,22%)]"
				>
					Learn More
				</button>
			</div>
			<div class="bg-[hsl(179,100%,13%)] p-12 flex flex-col justify-between items-start gap-8 md:gap-20">
				<div class="space-y-8">
					<img src="/projects/imgs/3-column-preview-card-component/icon-luxury.svg" alt="" />
					<h2 class="font-['Big_Shoulders_Display'] text-4xl">LUXURY</h2>
					<p class="text-white/75">
						Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
						rental and arrive in style.
					</p>
				</div>
				<button
					class="bg-white hover:bg-transparent hover:text-white border-2 border-white transition-colors duration-300 px-8 py-3 text-sm md:text-base rounded-full text-[hsl(179,100%,13%)]"
				>
					Learn More
				</button>
			</div>
		</div>
	</div>
</template>

<!--
- Bright orange: hsl(31,77%,52%)
- Dark cyan: hsl(184,100%,22%)
- Very dark cyan: hsl(179,100%,13%)
- Transparent white (paragraphs): hsla(0,0%,100%,0.75)
- Very light gray (background,headings,buttons): hsl(0,0%,95%)

- Family: [Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)
- Weights: 400

- Family: [Big Shoulders Display](https://fonts.google.com/specimen/Big+Shoulders+Display)
- Weights: 700
-->
