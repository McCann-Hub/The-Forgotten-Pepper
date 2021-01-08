 <template>
  <div class="relative">
    <div class="min-h-full flex flex-col justify-evenly items-center">
      <page-card
        v-for="page in pages"
        :key="page.key"
        :page="page"
        orientation="horizontal"
      />
    </div>
    <div class="absolute bottom-0 w-full">
      <div class="flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";

export default {
  name: "DirectoryPagination",
  components: {
    Pagination,
  },
  computed: {
    pages() {
      const pages = [...this.$pagination.pages];
      pages.sort((a, b) => {
        const aPublished = new Date(a.frontmatter.date || a.created);
        const bPublished = new Date(b.frontmatter.date || b.created);
        if (bPublished - aPublished === 0) {
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        }
        return bPublished - aPublished;
      });
      return pages;
    },
  },
};
</script>
