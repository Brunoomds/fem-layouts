<template>
	<section class="bg-[hsl(233,47%,7%)] min-h-screen grid place-items-center font-[Inter] p-4">
		<div class="grid lg:grid-cols-2 rounded-xl overflow-hidden w-full max-w-md lg:max-w-5xl">
			<div
				class="bg-[hsl(277,64%,61%)] bg-blend-multiply bg-[url(/projects/assets/stats-preview-card-component/image-header-mobile.jpg)] lg:bg-[url(/projects/assets/stats-preview-card-component/image-header-desktop.jpg)] w-full h-60 lg:h-full bg-no-repeat bg-cover lg:order-1"
			></div>
			<div class="p-8 lg:p-14 bg-[hsl(244,38%,16%)] text-center lg:text-left text-white space-y-10 lg:space-y-14">
				<div class="space-y-4 lg:space-y-6">
					<h2 class="font-bold text-3xl lg:text-4xl">
						Get <span class="text-[hsl(277,64%,61%)]">insights</span> that help your business grow.
					</h2>
					<p class="text-white/75">
						Discover the benefits of data analytics and make better decisions regarding revenue, customer
						experience, and overall efficiency.
					</p>
				</div>
				<div class="flex flex-col lg:flex-row gap-6 lg:gap-14">
					<div>
						<p class="text-2xl font-bold">10K+</p>
						<p class="text-white/60 text-sm font-['Lexend_Deca']">COMPANIES</p>
					</div>
					<div>
						<p class="text-2xl font-bold">314</p>
						<p class="text-white/60 text-sm font-['Lexend_Deca']">TEMPLATES</p>
					</div>
					<div>
						<p class="text-2xl font-bold">12M+</p>
						<p class="text-white/60 text-sm font-['Lexend_Deca']">QUERIES</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<!--
- Very dark blue (main background): hsl(233,47%,7%)
- Dark desaturated blue (card background): hsl(244,38%,16%)
- Soft violet (accent): hsl(277,64%,61%)
- Slightly transparent white (main paragraph): hsla(0,0%,100%,0.75)
- Slightly transparent white (stat headings): hsla(0,0%,100%,0.6)

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 400, 700

- Family: [Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)
- Weights: 400
-->
