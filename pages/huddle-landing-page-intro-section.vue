<template>
	<section
		class="bg-[hsl(257,40%,49%)] min-h-screen flex justify-center bg-no-repeat bg-contain md:bg-cover bg-[url(/projects/assets/huddle-landing-page-intro-section/bg-mobile.svg)] md:bg-[url(/projects/assets/huddle-landing-page-intro-section/bg-desktop.svg)]"
	>
		<div class="flex-grow max-w-lg xl:max-w-7xl px-8 py-10 flex flex-col justify-between items-start gap-12">
			<img src="/projects/assets/huddle-landing-page-intro-section/logo.svg" alt="" class="h-12" />
			<div class="flex flex-col xl:flex-row items-center gap-12 text-white">
				<img
					src="/projects/assets/huddle-landing-page-intro-section/illustration-mockups.svg"
					alt=""
					class="w-full max-w-2xl"
				/>
				<div class="space-y-6 text-center xl:text-left font-[Poppins]">
					<p class="text-2xl xl:text-4xl font-semibold">Build The Community Your Fans Will Love</p>
					<p class="font-['Open_Sans'] xl:text-lg">
						Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
						Create connections with your users as you engage in genuine discussion.
					</p>
					<a
						href="#"
						class="w-full max-w-[15rem] xl:max-w-[10rem] block mx-auto xl:ml-0 text-center text-[hsl(257,40%,49%)] bg-white shadow-md p-3 rounded-full hover:bg-[hsl(300,69%,71%)] hover:text-white transition-colors duration-300"
					>
						Register
					</a>
				</div>
			</div>
			<div class="w-full flex justify-center xl:justify-end items-center gap-4 text-white">
				<a
					href="#"
					class="p-2 rounded-full border border-current hover:text-[hsl(300,69%,71%)] transition-colors duration-300"
				>
					<IconFacebook class="w-4" />
				</a>
				<a
					href="#"
					class="p-2 rounded-full border border-current hover:text-[hsl(300,69%,71%)] transition-colors duration-300"
				>
					<IconInstagram class="w-4" />
				</a>
				<a
					href="#"
					class="p-2 rounded-full border border-current hover:text-[hsl(300,69%,71%)] transition-colors duration-300"
				>
					<IconTwitter class="w-4" />
				</a>
			</div>
		</div>
	</section>
</template>

<!--
- Violet: hsl(257,40%,49%)
- Soft Magenta: hsl(300,69%,71%)

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400, 600

- Family: [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- Weights: 400
-->
