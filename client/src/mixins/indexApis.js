export default {
  methods: {
    async GET(url, refreshGrid = true) {
      this.$store.commit("startLoading");
      const resp = await (await fetch(url)).json();
      if (refreshGrid) {
        await this.$store.dispatch("shardsGrid");
      }
      this.$store.commit("stopLoading");
      return resp;
    },
    async openIndex(index) {
      return await this.GET(`/api/v1/index/${index}/open`, true);
    },
    async closeIndex(index) {
      return await this.GET(`/api/v1/index/${index}/close`, true);
    },
    async getMapping(index) {
      return await this.GET(`/api/v1/index/${index}/mapping`);
    },
    async getSettings(index) {
      return await this.GET(`/api/v1/index/${index}/settings`);
    },
    async getHead(index) {
      return await this.GET(`/api/v1/index/${index}/head`);
    }
  }
};
