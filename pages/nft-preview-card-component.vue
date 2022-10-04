<template>
	<div class="bg-[hsl(217,54%,11%)] min-h-screen grid place-items-center p-4 font-[Outfit]">
		<div class="w-full max-w-xs bg-[hsl(216,50%,16%)] p-4 rounded-2xl shadow-2xl text-[hsl(215,51%,70%)] space-y-6">
			<div class="rounded-lg overflow-hidden relative">
				<img src="/projects/imgs/nft-preview-card-component/image-equilibrium.jpg" alt="" />
				<a
					href="#"
					class="absolute inset-0 flex justify-center items-center bg-[hsl(178,100%,50%)]/50 opacity-0 hover:opacity-100 transition-opacity duration-500"
				>
					<img src="/projects/imgs/nft-preview-card-component/icon-view.svg" alt="" />
				</a>
			</div>
			<div class="space-y-5">
				<a
					href="#"
					class="text-2xl font-semibold text-white hover:text-[hsl(178,100%,50%)] transition-colors duration-500"
				>
					Equilibrium #3429
				</a>
				<p class="text-lg">Our Equilibrium collection promotes balance and calm.</p>
				<div class="flex justify-between items-center gap-2">
					<div class="flex items-center gap-2">
						<img src="/projects/imgs/nft-preview-card-component/icon-ethereum.svg" alt="" />
						<p class="text-[hsl(178,100%,50%)] font-semibold">0.041 ETH</p>
					</div>
					<div class="flex items-center gap-2">
						<img src="/projects/imgs/nft-preview-card-component/icon-clock.svg" alt="" />
						<p>3 days left</p>
					</div>
				</div>
			</div>
			<hr class="border-[hsl(215,32%,27%)]" />
			<div class="flex items-center gap-4">
				<img
					src="/projects/imgs/nft-preview-card-component/image-avatar.png"
					alt=""
					class="w-10 border-2 border-white rounded-full"
				/>
				<p>
					Creation of
					<a href="#" class="text-white text-sm hover:text-[hsl(178,100%,50%)] transition-colors duration-500"
						>Jules Wyvern</a
					>
				</p>
			</div>
		</div>
	</div>
</template>

<!--
- Soft blue: hsl(215,51%,70%)
- Cyan: hsl(178,100%,50%)
- Very dark blue (main BG): hsl(217,54%,11%)
- Very dark blue (card BG): hsl(216,50%,16%)
- Very dark blue (line): hsl(215,32%,27%)

- Family: [Outfit](https://fonts.google.com/specimen/Outfit)
- Weights: 300, 400, 600
-->
