<template>
	<div class="bg-[hsl(210,46%,95%)] min-h-screen grid place-items-center p-4 font-[Manrope]">
		<div class="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
			<img src="/projects/imgs/article-preview-component/drawers.jpg" alt="" class="w-full h-60 object-cover" />
			<div class="bg-white text-[hsl(217,19%,35%)]">
				<div class="px-6 py-8 space-y-4">
					<h2 class="font-bold">
						Shift the overall look and feel by adding these wonderful touches to furniture in your home
					</h2>
					<p class="text-[hsl(214,17%,51%)] text-sm">
						Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
						uninviting. I've got some simple tips to help you make any room feel complete.
					</p>
				</div>
				<div class="px-6 pb-4 relative">
					<div class="flex justify-between items-center gap-2">
						<div class="flex items-center gap-3">
							<img
								src="/projects/imgs/article-preview-component/avatar-michelle.jpg"
								alt=""
								class="w-12 rounded-full"
							/>
							<div class="text-sm">
								<p class="font-bold">Michelle Appleton</p>
								<p class="text-[hsl(212,23%,69%)]">28 Jun 2020</p>
							</div>
						</div>
						<button
							class="focus-visible:outline outline-[hsl(217,19%,35%)] p-2 bg-[hsl(210,46%,95%)] rounded-full"
						>
							<img src="/projects/imgs/article-preview-component/icon-share.svg" alt="" />
						</button>
					</div>
					<div class="absolute inset-0 bg-[hsl(217,19%,35%)] flex justify-between items-center gap-4 px-6">
						<div class="flex items-center gap-4">
							<p class="text-[hsl(212,23%,69%)] text-sm tracking-[0.4em]">SHARE</p>
							<img src="/projects/imgs/article-preview-component/icon-facebook.svg" alt="" />
							<img src="/projects/imgs/article-preview-component/icon-twitter.svg" alt="" />
							<img src="/projects/imgs/article-preview-component/icon-pinterest.svg" alt="" />
						</div>
						<button
							class="focus-visible:outline outline-[hsl(217,19%,35%)] p-2 bg-[hsl(214,17%,51%)] rounded-full"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" class="fill-white">
								<path
									d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
								/>
							</svg>
						</button>
						a
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<!--
- Very Dark Grayish Blue: hsl(217,19%,35%)
- Desaturated Dark Blue: hsl(214,17%,51%)
- Grayish Blue: hsl(212,23%,69%)
- Light Grayish Blue: hsl(210,46%,95%)

- Family: [Manrope](https://fonts.google.com/specimen/Manrope)
- Weights: 500,700
-->
