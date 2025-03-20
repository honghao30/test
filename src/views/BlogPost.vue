<template>
  <div class="min-w-[320px]">
    <!-- HERO -->
    <section class="hero">
      <div class="relative mx-auto mt-35 flex w-full justify-center">
          video
      </div>
    </section>

    <!-- LEADERSHIP -->
    <section
      class="leadership flex flex-col items-center pt-174 md:pt-178 lg:pt-200"
    >
    <div v-if="post">
        <h1 class="text-2xl font-bold">{{ post.title }}</h1>
        <p class="text-lg">{{ post.content }}</p>
        <p v-if="post.url">URL: {{ post.url }}</p>
      </div>
      <p v-else class="text-red-500">로딩 중... 또는 데이터가 없습니다.</p>
    </section>

    <section class="section section-footer fp-auto-height pt-52 md:pt-0">
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import Footer from '/Components/Footer.vue'

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const postId = ref(route.params.id);
const post = ref(null);

const fetchPost = async () => {
  try {
    const response = await fetch("/posts/postList.json");
    const posts = await response.json();
    console.log(response)

    post.value = posts.find((p: any) => String(p.id) === String(postId.value));

    console.log("포스트 데이터:", post.value); // ✅ 디버깅

    if (!post.value) {
      console.error("해당 ID의 포스트를 찾을 수 없습니다.");
    }
  } catch (error) {
    console.error("포스트 데이터를 불러오는 중 오류 발생:", error);
  }
};

onMounted(fetchPost);

</script>
<style lang="scss" scoped>

</style>
