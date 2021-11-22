<template>
  <div class="flex items-center justify-around h-16 bg-green px-10">
    <div class="w-56 min-w-max px-2">
      <img src="/images/Logo.png" alt="" />
    </div>
    <ul class="flex w-4/5 justify-end">
      <li
        v-for="(item, i) in list"
        :key="i"
        class="
          flex
          items-center
          text-mi
          bg-white
          font-bold
          text-green
          rounded-lg
          px-3
          py-1
          mr-3
          min-w-max
        "
      >
        <font-awesome-icon :icon="item.icon" />
        <p class="ml-1">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      list: [
        { title: "找單車", icon: "bicycle" },
        { title: "找路線", icon: "route" },
        // { title: "找景點", icon: "umbrella-beach" },
      ],
    };
  },
};
</script>

<style>
</style>
