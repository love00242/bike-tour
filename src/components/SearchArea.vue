<template>
  <div
    class="
      flex flex-col
      absolute
      top-6
      left-5
      w-96
      h-xl
      bg-white
      rounded-lg
      shadow
      p-3
      z-1
    "
  >
    <SearchBar @changeCity="changeCity" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    changeCity(val) {
      this.$emit("changeCity", val)
    }
  },
};
</script>
