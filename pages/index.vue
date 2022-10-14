<template>
	<section class="py-20">
		<Container class="space-y-10 text-slate-700">
			<div class="flex justify-between items-center flex-col md:flex-row gap-6">
				<h1 class="text-3xl lg:text-4xl font-medium text-center sm:text-left">
					<a
						href="https://www.frontendmentor.io"
						target="_blank"
						class="text-[#6abecd] underline underline-offset-4 hover:text-opacity-70 transition-colors duration-300"
					>
						Frontend Mentor</a
					>
					Projects
				</h1>
				<label
					class="bg-white border-2 border-indigo-300 rounded-sm px-4 py-2 flex gap-4 w-full max-w-sm md:max-w-xs focus-within:border-indigo-600 group transition-colors duration-300"
				>
					<IconSearch
						class="w-4 text-indigo-300 group-focus-within:text-indigo-600 transition-colors duration-300"
					/>
					<input
						type="text"
						placeholder="Search..."
						v-model="search"
						class="w-full outline-none bg-transparent font-medium text-slate-500"
					/>
				</label>
			</div>
			<div class="space-y-4">
				<div class="text-slate-400">
					<p v-show="search" class="font-medium">
						Showing <strong>{{ filteredProjects.length }}</strong> results for
						<strong>{{ search }}</strong>
					</p>
					<p v-show="!search" class="font-semibold">Showing all projects</p>
				</div>
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
					<NuxtLink v-for="page in filteredProjects" :to="page.path" class="group">
						<div
							class="rounded-sm overflow-hidden w-full aspect-video border-2 border-indigo-300 group-hover:border-indigo-600 shadow-md group-hover:shadow-lg transition-[box-shadow,border-color] duration-300"
						>
							<img
								:src="page.img"
								alt=""
								class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
							/>
						</div>
						<h2
							class="xl:text-xl font-semibold mt-4 group-hover:text-indigo-600 transition-colors duration-300"
						>
							{{ page.title }}
						</h2>
					</NuxtLink>
				</div>
			</div>
		</Container>
	</section>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			frontendProjects: [
				{
					title: 'Advice Generator App',
					path: '/advice-generator-app',
					img: '/projects/thumbs/advice-generator-app.jpg',
					level: 'Newbie',
				},
				{
					title: 'QR Code Component',
					path: '/qr-code-component',
					img: '/projects/thumbs/qr-code-component.jpg',
					level: 'Newbie',
				},
				{
					title: 'NFT Preview Card Component',
					path: '/nft-preview-card-component',
					img: '/projects/thumbs/nft-preview-card-component.jpg',
					level: 'Newbie',
				},
				{
					title: 'Product Preview Card Component',
					path: '/product-preview-card-component',
					img: '/projects/thumbs/product-preview-card-component.jpg',
					level: 'Newbie',
				},
				{
					title: 'Huddle Landing Page Intro Section',
					path: '/huddle-landing-page-intro-section',
					img: '/projects/thumbs/huddle-landing-page-intro-section.jpg',
					level: 'Newbie',
				},
				{
					title: 'Ping Coming Soon Page',
					path: '/ping-coming-soon-page',
					img: '/projects/thumbs/ping-coming-soon-page.jpg',
					level: 'Newbie',
				},
				{
					title: 'Interactive Rating Component',
					path: '/interactive-rating-component',
					img: '/projects/thumbs/interactive-rating-component.jpg',
					level: 'Newbie',
				},
				{
					title: 'Order Summary Component',
					path: '/order-summary-component',
					img: '/projects/thumbs/order-summary-component.jpg',
					level: 'Newbie',
				},
				{
					title: 'Stats Preview Card Component',
					path: '/stats-preview-card-component',
					img: '/projects/thumbs/stats-preview-card-component.jpg',
					level: 'Newbie',
				},
				{
					title: '3 Column Preview Card Component',
					path: '/3-column-preview-card-component',
					img: '/projects/thumbs/3-column-preview-card-component.jpg',
					level: 'Newbie',
				},
				{
					title: 'Profile Card Component',
					path: '/profile-card-component',
					img: '/projects/thumbs/profile-card-component.jpg',
				},
				{
					title: 'Single Price Grid Component',
					path: '/single-price-grid-component',
					img: '/projects/thumbs/single-price-grid-component.jpg',
				},
				{
					title: 'Four Card Feature Section',
					path: '/four-card-feature-section',
					img: '/projects/thumbs/four-card-feature-section.jpg',
				},
				{
					title: 'Social Proof Section',
					path: '/social-proof-section',
					img: '/projects/thumbs/social-proof-section.jpg',
				},
				{
					title: 'Intro Component with Signup Form',
					path: '/intro-component-with-signup-form',
					img: '/projects/thumbs/intro-component-with-signup-form.jpg',
				},
			],
		}
	},
	computed: {
		filteredProjects() {
			return this.frontendProjects
				.filter((page) => {
					return page.title.toLowerCase().includes(this.search.toLowerCase())
				})
				.reverse()
		},
	},
}
</script>
