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
      blog list
      <ul>
          <li v-for="post in posts" :key="post.id">
            <router-link :to="`/posts/${post.id}`">
              {{ post.title }} - {{ post.date }}
            </router-link>
          </li>
      </ul>
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

const posts = ref([]);

const fetchPosts = async () => {
  try {
    const response = await fetch("/posts/postList.json");
    posts.value = await response.json();
  } catch (error) {
    console.error("블로그 목록을 불러오는 중 오류 발생:", error);
  }
};

onMounted(fetchPosts);
</script>
<style lang="scss" scoped>

</style>
