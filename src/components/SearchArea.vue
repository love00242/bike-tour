<template>
  <div
    class="
      flex flex-col
      absolute
      top-5
      left-5
      w-96
      h-xl
      bg-white
      rounded-lg
      shadow
      p-3
    "
  >
    <SearchBar />
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
  methods: {},
};
</script>
