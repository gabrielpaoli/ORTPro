<template>
  <div><b>Total contratados: </b> {{ totalContratados() }}</div>
</template>

<script>
export default {
  name: "Dashboard",
  methods: {
    totalContratados() {
      return this.$store.getters.getTotalContratados();
    },
  },
};
</script>
