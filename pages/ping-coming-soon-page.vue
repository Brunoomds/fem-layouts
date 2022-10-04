<template>
	<div class="min-h-screen grid place-items-center font-['Libre_Franklin']">
		<div class="px-8 py-14 max-w-sm sm:max-w-2xl text-center space-y-12">
			<img src="/projects/imgs/ping-coming-soon-page/logo.svg" alt="" class="mx-auto" />
			<div class="space-y-6">
				<div class="space-y-2">
					<p class="text-2xl sm:text-4xl text-[hsl(0,0%,59%)]">
						We are Launching <span class="text-[hsl(209,33%,12%)] font-bold">soon!</span>
					</p>
					<p class="text-[hsl(209,33%,12%)]">Subscribe and get notified</p>
				</div>
				<form class="flex flex-col sm:flex-row gap-2" @submit.prevent="submitForm">
					<div class="w-full relative">
						<input
							v-model="payload.email"
							type="email"
							@focus="validEmail = true"
							placeholder="Your email address..."
							class="px-8 sm:px-6 py-3 w-full text-sm sm:text-base border rounded-full outline-none focus:border-[hsl(0,0%,59%)]"
							:class="{ 'border-[hsl(354,100%,66%)]': !validEmail }"
						/>
						<p
							v-show="!validEmail"
							class="text-xs italic text-[hsl(354,100%,66%)] sm:absolute left-6 bottom-0 mt-2 sm:translate-y-[calc(100%+8px)]"
						>
							Please provide a valid email address
						</p>
					</div>
					<button
						type="submit"
						class="bg-[hsl(223,87%,63%)] hover:bg-opacity-80 transition-colors duration-300 shrink-0 p-3 sm:px-14 rounded-full font-semibold text-white text-sm sm:text-base shadow-lg shadow-[hsl(223,87%,63%)]/25"
					>
						Notify Me
					</button>
				</form>
			</div>
			<img src="/projects/imgs/ping-coming-soon-page/illustration-dashboard.png" alt="" />
			<div class="space-y-8">
				<div class="flex justify-center items-center gap-2 text-[hsl(223,87%,63%)]">
					<a
						href="#"
						class="p-2 border border-[hsl(223,100%,88%)] hover:border-[hsl(223,87%,63%)] hover:bg-[hsl(233,87%,63%)] hover:text-white rounded-full transition-colors duration-300"
					>
						<IconFacebook class="w-4" />
					</a>
					<a
						href="#"
						class="p-2 border border-[hsl(223,100%,88%)] hover:border-[hsl(223,87%,63%)] hover:bg-[hsl(233,87%,63%)] hover:text-white rounded-full transition-colors duration-300"
					>
						<IconInstagram class="w-4" />
					</a>
					<a
						href="#"
						class="p-2 border border-[hsl(223,100%,88%)] hover:border-[hsl(223,87%,63%)] hover:bg-[hsl(233,87%,63%)] hover:text-white rounded-full transition-colors duration-300"
					>
						<IconTwitter class="w-4" />
					</a>
				</div>
				<p class="text-[hsl(0,0%,59%)] text-sm">© Copyright Ping. All rights reserved.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			payload: { email: '' },
			validEmail: true,
		}
	},
	methods: {
		submitForm(event) {
			const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
			this.validEmail = emailRegExp.test(this.payload.email)

			if (this.validEmail) alert('Thank you for subscribing!'), event.target.submit()
		},
	},
}
</script>

<!--
- Blue: hsl(223,87%,63%)
- Pale Blue: hsl(223,100%,88%)
- Light Red: hsl(354,100%,66%)
- Gray: hsl(0,0%,59%)
- Very Dark Blue: hsl(209,33%,12%)

- Family: [Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin)
- Weights: 300, 600, 700
-->
