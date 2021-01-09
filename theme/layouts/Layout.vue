 <template>
  <div class="relative">
    <div class="min-h-full flex flex-col justify-evenly items-center">
      <page-card
        v-for="page in $pagination.pages"
        :key="page.key"
        :page="page"
        orientation="horizontal"
      />
    </div>
    <div class="absolute bottom-0 w-full">
      <div class="flex justify-center items-center">
        <Pagination id="pagination" />
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";

export default {
  name: "Layout",
  components: {
    Pagination,
  },
};
</script>