<template>
	<footer class="bg-indigo-600 py-4 shadow-lg text-white text-center">
		<Container class="flex flex-col justify-between items-center sm:flex-row gap-4">
			<h2 class="text-4xl font-serif">Get in touch</h2>
			<ul class="flex items-center gap-2">
				<li
					v-for="contact in contacts"
					class="hover:bg-white hover:text-indigo-600 rounded-full transition-colors duration-300"
				>
					<a :href="contact.link" target="_blank" class="block p-2">
						<component :is="contact.icon" class="w-5" />
					</a>
				</li>
			</ul>
		</Container>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			contacts: [
				{
					name: 'Github',
					link: 'https://github.com/Brunoomds',
					icon: resolveComponent('IconGithub'),
				},
				{
					name: 'Whatsapp',
					link: 'https://api.whatsapp.com/send?phone=5516997599338',
					icon: resolveComponent('IconWhatsapp'),
				},
				{
					name: 'Email',
					link: 'mailto:brunoo.m.d.silva@gmail.com',
					icon: resolveComponent('IconEmail'),
				},

				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com/in/bruno-m-silva-24bb4222a',
					icon: resolveComponent('IconLinkedin'),
				},
			],
		}
	},
}
</script>
