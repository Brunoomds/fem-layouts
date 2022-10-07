<template>
	<div class="bg-white min-h-screen grid place-items-center font-['League_Spartan'] px-4 py-20">
		<div class="w-full max-w-xs xl:max-w-6xl space-y-16">
			<div class="text-center flex flex-col xl:items-center gap-6 xl:flex-row xl:justify-between xl:text-left">
				<div class="space-y-5 max-w-sm">
					<h2 class="text-[hsl(300,43%,22%)] text-4xl xl:text-5xl leading-7 font-bold">
						10,000+ of our users love our products.
					</h2>
					<p class="text-[hsl(303,10%,53%)] font-medium">
						We only provide great products combined with excellent customer service. See what our satisfied
						customers are saying about our services.
					</p>
				</div>
				<div class="flex flex-col gap-4">
					<div
						class="bg-[hsl(300,24%,96%)] p-4 xl:pl-8 xl:pr-16 rounded-lg flex flex-col xl:flex-row gap-3 xl:gap-8 items-center xl:-translate-x-20"
					>
						<div class="flex items-center gap-3">
							<img v-for="star in 5" src="/projects/imgs/social-proof-section/icon-star.svg" alt="" />
						</div>
						<p class="text-[hsl(300,43%,22%)] leading-none font-bold">Rating 5 Stars in Reviews</p>
					</div>
					<div
						class="bg-[hsl(300,24%,96%)] p-4 xl:pl-8 xl:pr-16 rounded-lg flex flex-col xl:flex-row gap-3 xl:gap-8 items-center xl:-translate-x-10"
					>
						<div class="flex items-center gap-3">
							<img v-for="star in 5" src="/projects/imgs/social-proof-section/icon-star.svg" alt="" />
						</div>
						<p class="text-[hsl(300,43%,22%)] leading-none font-bold">Rated 5 Stars in Report Guru</p>
					</div>
					<div
						class="bg-[hsl(300,24%,96%)] p-4 xl:pl-8 xl:pr-16 rounded-lg flex flex-col xl:flex-row gap-3 xl:gap-8 items-center"
					>
						<div class="flex items-center gap-3">
							<img v-for="star in 5" src="/projects/imgs/social-proof-section/icon-star.svg" alt="" />
						</div>
						<p class="text-[hsl(300,43%,22%)] leading-none font-bold">Rated 5 Stars in BestTech</p>
					</div>
				</div>
			</div>
			<div class="grid xl:grid-cols-3 gap-4 text-white">
				<div class="bg-[hsl(300,43%,22%)] p-6 xl:p-10 space-y-4 rounded-lg">
					<div class="flex items-center gap-6">
						<img
							src="/projects/imgs/social-proof-section/image-colton.jpg"
							alt=""
							class="w-10 rounded-full"
						/>
						<div>
							<p class="leading-snug font-bold">Colton Smith</p>
							<p class="text-[hsl(333,80%,67%)] leading-none">Verified Buyer</p>
						</div>
					</div>
					<p>
						"We needed the same printed design as the one we had ordered a week prior. Not only did they find
						the original order, but we also received it in time. Excellent!"
					</p>
				</div>
				<div class="bg-[hsl(300,43%,22%)] p-6 xl:p-10 space-y-4 rounded-lg xl:translate-y-4">
					<div class="flex items-center gap-6">
						<img
							src="/projects/imgs/social-proof-section/image-irene.jpg"
							alt=""
							class="w-10 rounded-full"
						/>
						<div>
							<p class="leading-snug font-bold">Irene Roberts</p>
							<p class="text-[hsl(333,80%,67%)] leading-none">Verified Buyer</p>
						</div>
					</div>
					<p>
						"Customer service is always excellent and very quick turn around. Completely delighted with the
						simplicity of the purchase and the speed of delivery."
					</p>
				</div>
				<div class="bg-[hsl(300,43%,22%)] p-6 xl:p-10 space-y-4 rounded-lg xl:translate-y-8">
					<div class="flex items-center gap-6">
						<img
							src="/projects/imgs/social-proof-section/image-anne.jpg"
							alt=""
							class="w-10 rounded-full"
						/>
						<div>
							<p class="leading-snug font-bold">Anne Wallace</p>
							<p class="text-[hsl(333,80%,67%)] leading-none">Verified Buyer</p>
						</div>
					</div>
					<p>
						"Put an order with this company and can only praise them for the very high standard. Will
						definitely use them again and recommend them to everyone!"
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<!--
- Very Dark Magenta: hsl(300,43%,22%)
- Soft Pink: hsl(333,80%,67%)
- Dark Grayish Magenta: hsl(303,10%,53%)
- Light Grayish Magenta: hsl(300,24%,96%)

- Family: [League Spartan](https://fonts.google.com/specimen/League+Spartan)
- Weights: 400,500,700
-->
