<template>
	<section class="bg-[hsl(185,75%,39%)] min-h-screen grid place-items-center p-4 font-['Kumbh_Sans']">
		<img
			src="/projects/assets/profile-card-component/bg-pattern-top.svg"
			alt=""
			class="min-w-max fixed left-0 top-0 -translate-x-3/4 -translate-y-[60%] lg:-translate-x-[25%] lg:-translate-y-[52%]"
		/>
		<img
			src="/projects/assets/profile-card-component/bg-pattern-bottom.svg"
			alt=""
			class="min-w-max fixed right-0 bottom-0 translate-x-3/4 translate-y-[60%] lg:translate-x-[20%] lg:translate-y-[65%]"
		/>
		<div class="w-full max-w-sm rounded-xl overflow-hidden text-center relative text-[hsl(229,23%,23%)] shadow-2xl">
			<img src="/projects/assets/profile-card-component/bg-pattern-card.svg" alt="" class="w-full object-cover" />
			<div class="px-4 pb-8 pt-16 relative bg-white">
				<img
					src="/projects/assets/profile-card-component/image-victor.jpg"
					alt=""
					class="rounded-full border-4 border-white absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
				/>
				<p class="text-xl mb-2">
					<strong>Victor Crest</strong> <span class="text-[hsl(227,10%,46%)]">26</span>
				</p>
				<p class="text-[hsl(227,10%,46%)]">London</p>
			</div>
			<div class="p-6 grid grid-cols-3 gap-2 break-words border-t bg-white">
				<div>
					<p class="font-bold text-xl">80K</p>
					<p class="text-[hsl(0,0%,59%)] text-xs tracking-widest">Followers</p>
				</div>
				<div>
					<p class="font-bold text-xl">803K</p>
					<p class="text-[hsl(0,0%,59%)] text-xs tracking-widest">Likes</p>
				</div>
				<div>
					<p class="font-bold text-xl">1.4K</p>
					<p class="text-[hsl(0,0%,59%)] text-xs tracking-widest">Photos</p>
				</div>
			</div>
		</div>
	</section>
</template>

<!--
- Dark cyan: hsl(185,75%,39%)
- Very dark desaturated blue: hsl(229,23%,23%)
- Dark grayish blue: hsl(227,10%,46%)
- Dark gray: hsl(0,0%,59%)

- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
- Weights: 400,700
-->
