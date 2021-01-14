export default {
  props: {
    frontmatter: {
      type: Object,
      required: true,
    },
  },
  computed: {
    selectLabel() {
      return (this.frontmatter.select || {}).label || "Select";
    },
    frontmatterId() {
      return this.frontmatter.id;
    },
    selectOptions() {
      return (this[`$${this.frontmatterId}`] || {})._metaMap;
    },
    allowMultiple() {
      return (this.frontmatter.select || {}).multiple || false;
    },
  },
  methods: {
    cleanKey(name) {
      return name.replace(/[^\w]/g, " ");
    },
  },
};
