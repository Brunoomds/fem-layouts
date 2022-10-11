<template>
	<div class="min-h-screen bg-slate-100 flex flex-col">
		<TheHeader :class="{ hidden: $route.path != '/' }" />
		<main class="flex-grow">
			<NuxtPage />
		</main>
		<TheFooter :class="{ hidden: $route.path != '/' }" />
	</div>
</template>
