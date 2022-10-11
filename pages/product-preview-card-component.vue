<template>
	<section class="bg-[hsl(30,38%,92%)] min-h-screen grid place-items-center p-4">
		<div class="grid sm:grid-cols-2 w-full max-w-xs sm:max-w-xl rounded-2xl overflow-hidden shadow-lg">
			<picture>
				<source
					media="(min-width: 640px)"
					srcset="/projects/assets/product-preview-card-component/image-product-desktop.jpg"
				/>
				<img
					src="/projects/assets/product-preview-card-component/image-product-mobile.jpg"
					alt=""
					class="w-full h-full object-cover"
				/>
			</picture>
			<div class="p-8 bg-white font-[Montserrat] space-y-4">
				<p class="text-[hsl(228,12%,48%)] text-xs sm:text-sm tracking-widest">PERFUME</p>
				<p class="font-[Fraunces] text-2xl sm:text-3xl text-[hsl(212,21%,14%)]">
					Gabrielle Essence Eau De Parfum
				</p>
				<p class="text-sm text-[hsl(228,12%,48%)]">
					A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the
					House of CHANEL.
				</p>
				<div class="space-y-4">
					<div class="flex items-center gap-4">
						<p class="font-[Fraunces] text-2xl sm:text-3xl font-bold text-[hsl(158,36%,37%)]">$149.99</p>
						<p class="text-xs text-[hsl(228,12%,48%)] line-through">$169.99</p>
					</div>
					<a
						href="#"
						class="bg-[hsl(158,36%,37%)] hover:bg-[hsl(158,36%,20%)] transition-colors duration-300 p-4 flex justify-center items-center gap-2 rounded-lg"
					>
						<img src="/projects/assets/product-preview-card-component/icon-cart.svg" alt="" />
						<p class="text-white font-bold">Add to Cart</p>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<!--
- Dark cyan: hsl(158,36%,37%)
- Cream: hsl(30,38%,92%)
- Very dark blue: hsl(212,21%,14%)
- Dark grayish blue: hsl(228,12%,48%)

- Family: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- Weights: 500,700

- Family: [Fraunces](https://fonts.google.com/specimen/Fraunces)
- Weights: 700
-->
