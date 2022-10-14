<template>
	<section
		class="bg-[hsl(0,100%,74%)] bg-[url('/projects/assets/intro-component-with-signup-form/bg-intro-mobile.png')] sm:bg-[url('/projects/assets/intro-component-with-signup-form/bg-intro-desktop.png')] bg-no-repeat bg-cover min-h-screen p-6 grid place-items-center font-[Poppins]"
	>
		<div class="w-full max-w-xs">
			<div class="text-center text-white space-y-6">
				<h2 class="font-bold text-3xl">Learn to code by watching others</h2>
				<p class="font-medium">
					See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
					but understanding how developers think is invaluable.
				</p>
			</div>
			<div class="space-y-8">
				<div class="bg-[hsl(248,32%,49%)] px-12 py-6 rounded-xl shadow-[0_8px] shadow-black/20">
					<p class="text-center text-white"><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
				</div>
				<div class="bg-white p-6 rounded-lg">
					<form class="font-semibold space-y-4">
						<label class="block">
							<input type="text" placeholder="First Name" class="w-full p-3 rounded-md border" />
							<p class="hidden">First Name cannot be empty</p>
						</label>
						<label class="block">
							<input type="text" placeholder="Last Name" class="w-full p-3 rounded-md border" />
							<p class="hidden">Last Name cannot be empty</p>
						</label>
						<label class="block">
							<input type="email" placeholder="Email Address" class="w-full p-3 rounded-md border" />
							<p class="hidden">Looks like this is not an email</p>
						</label>
						<label class="block">
							<input type="password" placeholder="Password" class="w-full p-3 rounded-md border" />
							<p class="hidden">Password cannot be empty</p>
						</label>
						<button type="submit">CLAIM YOUR FREE TRIAL</button>
						<p>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<!--
- Red: hsl(0,100%,74%)
- Green: hsl(154,59%,51%)
- Blue: hsl(248,32%,49%)
- Dark Blue: hsl(249,10%,26%)
- Grayish Blue: hsl(246,25%,77%)

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400,500,600,700
-->
