<template>
	<div class="bg-indigo-600 py-8 shadow-lg">
		<Container class="flex justify-between items-center flex-col sm:flex-row gap-4 text-white text-center">
			<h2 class="text-4xl font-serif">Get in touch</h2>
			<div class="flex flex-col sm:flex-row items-center gap-2 text-sm font-semibold">
				<button
					@click="copyEmail()"
					class="p-2 flex items-center gap-3 hover:text-indigo-400 transition-colors duration-300 relative"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
						<path
							d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"
						/>
					</svg>
					<p>brunoo.m.d.silva@gmail.com</p>
					<p
						class="absolute inset-auto -translate-y-full mb-6 bg-indigo-800 px-3 py-2 rounded-sm text-white transition-opacity duration-700 opacity-0 pointer-events-none select-none"
						:class="{ 'opacity-100': emailCopied }"
					>
						Copied to clipboard!
					</p>
				</button>
				<a
					href="https://wa.me/5516997599338"
					target="_blank"
					class="p-2 flex items-center gap-3 hover:text-indigo-400 transition-colors duration-300"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 fill-current">
						<path
							d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
						/>
					</svg>
					<p>+55 (16) 99759-9338</p>
				</a>
			</div>
		</Container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			emailCopied: false,
		}
	},
	methods: {
		async copyEmail() {
			try {
				await navigator.clipboard.writeText('brunoo.m.d.silva@gmail.com')
				this.emailCopied = true
				setTimeout(() => {
					this.emailCopied = false
				}, 1500)
			} catch (error) {
				alert('Error copying email')
			}
		},
	},
}
</script>
