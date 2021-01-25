export default {
  props: {
    frontmatter: {
      type: Object,
      required: true,
    },
  },
  computed: {
    selectLabel() {
      return (
        (this.frontmatter.select || {}).label ||
        (this.allowMultiple ? 'Select' : this.cleanKey(this.frontmatterId))
      );
    },
    frontmatterId() {
      return this.frontmatter.id;
    },
    selectOptions() {
      const metaMap = (this[`$${this.frontmatterId}`] || {})._metaMap || {};
      return Object.keys(metaMap)
        .map((k) => metaMap[k])
        .map((m) =>
          Object.assign({}, m, {
            text: m.key,
            link: m.path,
          })
        );
    },
    allowMultiple() {
      return (this.frontmatter.select || {}).multiple || false;
    },
  },
  methods: {
    cleanKey(name) {
      return name.replace(/[^\w]/g, ' ');
    },
  },
};
