<template>
  <ul>
    <li v-for="(item, i) in bikeData" :key="i"></li>
  </ul>
</template>

<script>
export default {
  props: ["bikeData"],
  data() {
    return {};
  },
  computed: {
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="postcss" scoped>
</style>
