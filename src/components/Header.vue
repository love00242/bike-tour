<template>
  <div class="flex items-center justify-around h-16 bg-green">
    <div class="w-56 px-2">
      <img src="/images/Logo.png" alt="" />
    </div>
    <ul class="flex w-2/5">
      <li
        v-for="(item, i) in list" 
        :key="i"
        class="flex items-center text-mi bg-white font-bold text-green rounded-lg px-3 py-1"
      >
        <font-awesome-icon :icon="item.icon" />
        <p class="ml-0.5">{{ item.title }}</p>
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
        { title: "找景點", icon: "umbrella-beach" },
      ],
    };
  },
};
</script>

<style>
</style>
