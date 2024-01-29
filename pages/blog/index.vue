<script setup lang="ts">
const router = useRouter();

const goBack = () => {
	router.go(-1);
};

const postsLimit = '9';
</script>

<template>
	<div class="container mt-36">
		<Button
			class="flex items-center text-sm font-semibold leading-6 text-gray-900"
			@click="goBack"
		>
			<svg
				width="1rem"
				height="1rem"
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				class="mr-2"
			>
				<path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" />
				<path
					fill="#000000"
					d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
				/>
			</svg>

			<span>Back</span></Button
		>
	</div>

	<BlogSection class="mt-8" :posts-limit="postsLimit" />
</template>
