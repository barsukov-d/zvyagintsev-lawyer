<script setup lang="ts">
const props = defineProps({
	postsLimit: {
		type: String,
		required: true,
	},
});

const res = await useFetch(
	`http://localhost:3031/api/posts/?page=1&limit=${props.postsLimit}&order=DESC`,
);
const posts: any = res.data;
</script>

<template>
	<div class="container">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				From the blog
			</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">
				Learn how to grow your business with our expert advice.
			</p>
		</div>
		<div
			class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<NuxtLink
				v-for="post in posts"
				:key="post.id"
				class="flex max-w-xl flex-col items-start justify-between"
				:to="`/blog/posts/${post.id}`"
			>
				<div class="flex w-full items-center justify-center gap-x-4 text-xs">
					<img
						class="w-100 h-64 max-w-40 rounded-md object-cover"
						:src="`http://localhost:3031/static/${post.image}`"
						alt=""
					/>
				</div>
				<div class="mt-8 flex items-center gap-x-4 text-xs">
					<time :datetime="post.createdAt" class="text-gray-500">{{
						useFormatDate(post.createdAt)
					}}</time>
					<span
						class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
						>{{ post.category.name }}</span
					>
				</div>
				<div class="group relative">
					<h3
						class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
					>
						<a :href="post.href">
							<span class="absolute inset-0" />
							{{ post.title }}
						</a>
					</h3>
					<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
						{{ post.description }}
					</p>
				</div>
				<div class="relative mt-8 flex items-center gap-x-4">
					<!-- <img
						:src="post.author.imageUrl"
						alt=""
						class="h-10 w-10 rounded-full bg-gray-50"
					/> -->
					<div class="text-sm leading-6">
						<p class="font-semibold text-gray-900">
							<a :href="post.author.href">
								<span class="absolute inset-0" />
								{{ post.author }}
							</a>
						</p>
						<p class="text-gray-600">{{ post.author.role }}</p>
					</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<!-- <script setup lang="ts">
const res = await useFetch('http://localhost:3031/api/posts/?page=1&limit=3&order=DESC');
const posts: any = res.data;
</script> -->
