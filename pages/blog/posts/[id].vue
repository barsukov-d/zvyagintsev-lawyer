<script setup lang="ts">
import { useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const res = await useFetch(`http://localhost:3031/api/posts/${route.params.id}`);

const post: any = res.data;

const goBack = () => {
	router.go(-1);
};
</script>

<template>
	<div class="container pt-36">
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
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
			{{ post.title }}
		</h1>
		<p class="mt-6 text-xl leading-8 text-gray-700">
			{{ post.description }}
		</p>

		<img class="mt-6 max-w-3xl" :src="`http://localhost:3031/static/${post.image}`" />

		<div class="mt-6" v-html="post.content"></div>
	</div>
</template>

<style scoped></style>
