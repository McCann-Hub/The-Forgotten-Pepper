<template>
  <div class="flex flex-col">
    <div class="flex-grow flex flex-col justify-evenly items-center">
      <page-card
        v-for="page in $pagination.pages"
        :key="page.key"
        :page="page"
        orientation="horizontal"
      />
    </div>
    <div class="flex justify-center items-center">
      <Pagination />
    </div>
  </div>
</template>

<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";

export default {
  name: "IndexPost",
  components: {
    Pagination,
  },
};
</script>