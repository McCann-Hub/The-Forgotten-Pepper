 <template>
  <div class="min-h-full min-w-full flex flex-col justify-evenly items-center">
    <page-card
      v-for="page in pages"
      :key="page.key"
      :page="page"
      orientation="horizontal"
    />
  </div>
</template>

<script>
export default {
  name: "IndexPost",
  computed: {
    pages() {
      const pages = [...this.$pagination.pages];
      pages.sort((a, b) => {
        const aCreated = new Date(a.created);
        const bCreated = new Date(b.created);
        if (bCreated - aCreated === 0) {
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        }
        return bCreated - aCreated;
      });
      return pages;
    },
  },
};
</script>