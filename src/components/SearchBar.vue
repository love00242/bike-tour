<template>
  <div class="flex items-center justify-center mt-2">
    <div
      class="
        flex
        items-center
        justify-center
        w-64
        h-9
        bg-gray-light
        rounded-lg
        mr-3
      "
    >
      <input
        type="text"
        class="bg-gray-light placeholder-gray-dark focus:outline-none w-4/5"
        placeholder="搜尋路線或鄰近地點"
      />
      <font-awesome-icon icon="search" class="text-gray-dark ml-2" />
    </div>
    <p
      class="
        text-green
        px-2
        py-1
        rounded-lg
        border-solid border border-green
        font-bold
      "
    >
      <font-awesome-icon icon="sort-amount-down" /> 排序
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
