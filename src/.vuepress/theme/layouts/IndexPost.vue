 <template>
  <div class="relative">
    <div class="min-h-full flex justify-evenly items-center">
      <page-card
        v-for="page in $pagination.pages"
        :key="page.key"
        :page="page"
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
  name: "IndexPost",
  components: {
    Pagination,
  },
};
</script>