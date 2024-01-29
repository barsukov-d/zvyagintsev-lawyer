<script setup lang="ts">
const postsLimit = '3';
</script>
<template>
	<PageHero />
	<BlogSection :posts-limit="postsLimit" />
	<div class="container text-center">
		<NuxtLink
			to="/blog/posts"
			class="mt-24 inline-block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			<span>Go to all posts</span>
		</NuxtLink>
	</div>
</template>
