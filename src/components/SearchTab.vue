<template>
  <ul
    class="
      flex
      bg-white
      shadow
      rounded-large
      absolute
      top-5
      left-100
      py-1.5
      px-0.5
      w-max
    "
  >
    <li
      v-for="(item, i) in tabArr"
      :key="i"
      :class="['text-green mx-1.5 flex items-center px-2', { selected: isNowTab === item.type }]"
      @click="changeTab(item.type)"
    >
      <font-awesome-icon :icon="item.icon" class="mr-1" />
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["tabArr"],
  data() {
    return {
      isNowTab: 0,
    };
  },
  computed: {},
  methods: {
    changeTab(val) {
      this.isNowTab = val;
    },
  },
};
</script>

<style lang="postcss" scoped>
  .selected {
    @apply bg-green text-white rounded-large py-0.5;
  }
</style>
