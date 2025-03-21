<template>
  <div class="min-w-[320px]">
    <!-- HERO -->
    <section class="hero">
      <div class="relative mx-auto mt-35 flex w-full justify-center">
          video
      </div>
    </section>

    <!-- LEADERSHIP -->
    <section class="leadership flex flex-col items-center pt-174 md:pt-178 lg:pt-200">
      <div v-if="post">
        <h1 class="text-2xl font-bold">{{ post.title }}</h1>
        <div class="post-meta">
          <!-- <h1 class="text-2xl font-bold">{{ postData.title }}</h1> -->
          <p class="text-gray-500">작성일: {{ postData.date }}</p>
          <p class="text-gray-500">작성자: {{ postData.author }}</p>
          <p class="text-blue-500">태그: {{ postData.tags.join(', ') }}</p>
        </div>
        <!-- 목록 생성 -->
        <ul>
          <li v-for="heading in headings" :key="heading.id">
            <a :href="`#${heading.id}`" class="text-blue-500 hover:underline">{{ heading.text }}</a>
          </li>
        </ul>

        <!-- Markdown 내용 렌더링 -->
        <div v-html="postContent"></div>
      </div>
      <p v-else class="text-red-500">로딩 중... 또는 데이터가 없습니다.</p>
    </section>

    <section class="section section-footer fp-auto-height pt-52 md:pt-0">
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import markdownIt from 'markdown-it';

// 라우터 및 상태 변수
const route = useRoute();
const postId = ref(route.params.id);
const post = ref(null);
const postContent = ref('');
const headings = ref<{ id: string; text: string }[]>([]);
const postData = ref<{ [key: string]: any }>({});

// 프론트 매터 제거 함수
const removeFrontMatter = (markdown: string): string => {
  const frontMatterStart = markdown.indexOf('---');
  const frontMatterEnd = markdown.indexOf('---', frontMatterStart + 3);

  if (frontMatterStart !== -1 && frontMatterEnd !== -1) {
    return markdown.slice(frontMatterEnd + 3).trim();
  }
  return markdown.trim();
};

// 프론트 매터 데이터 추출 함수
const parseFrontMatter = (markdown: string): { [key: string]: any } => {
  const frontMatterStart = markdown.indexOf('---');
  const frontMatterEnd = markdown.indexOf('---', frontMatterStart + 3);

  if (frontMatterStart !== -1 && frontMatterEnd !== -1) {
    const frontMatter = markdown.slice(frontMatterStart + 3, frontMatterEnd).trim();
    const data: { [key: string]: any } = {};

    frontMatter.split('\n').forEach((line) => {
      const [key, value] = line.split(':').map((part) => part.trim());
      if (key && value) {
        // 값이 배열인 경우 (예: tags)
        if (value.startsWith('[') && value.endsWith(']')) {
          data[key] = value
            .slice(1, -1)
            .split(',')
            .map((item) => item.trim().replace(/['"]/g, ''));
        } else {
          // 값이 문자열인 경우
          data[key] = value.replace(/['"]/g, '');
        }
      }
    });

    return data;
  }

  return {};
};

// 포스트 데이터 불러오기
const fetchPost = async () => {
  try {
    const response = await fetch("/posts/postList.json");
    const posts = await response.json();
    post.value = posts.find((p: any) => String(p.id) === String(postId.value));

    if (post.value) {
      const markdownResponse = await fetch(`/posts/${post.value.id}.md`);
      const markdown = await markdownResponse.text();

      // 프론트 매터 데이터 추출
      postData.value = parseFrontMatter(markdown);

      // 프론트 매터 제거
      const markdownWithoutFrontMatter = removeFrontMatter(markdown);

      // Markdown을 HTML로 변환
      const md = new markdownIt({ html: true });
      const htmlContent = md.render(markdownWithoutFrontMatter);

      // h2 태그 추출 및 ID 추가
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const h2Elements = doc.querySelectorAll('h2');

      h2Elements.forEach((h2, index) => {
        const id = `section-${index}`;
        h2.setAttribute('id', id);
        headings.value.push({ id, text: h2.textContent || '' });
      });

      // 수정된 HTML로 업데이트
      postContent.value = doc.body.innerHTML;
    }
  } catch (error) {
    console.error("포스트 데이터를 불러오는 중 오류 발생:", error);
  }
};

// 컴포넌트 마운트 시 포스트 데이터 불러오기
onMounted(fetchPost);

</script>
<style lang="scss" scoped>

</style>
