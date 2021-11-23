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
    <component
      :is="nowComponent"
      :bikeData="bikeData"
      @changeCenterBike="changeCenterBike"
    ></component>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import BikeList from "@/components/BikeList.vue";
import RouteList from "@/components/RouteList.vue";
export default {
  props: ["bikeData", "routeData"],
  components: {
    SearchBar,
    BikeList,
    RouteList,
  },
  data() {
    return {};
  },
  computed: {
    nowComponent() {
      if (this.bikeData?.length > 0) {
        return "BikeList";
      } else {
        return "RouteList";
      }
    },
  },
  methods: {
    changeCity(val) {
      this.$emit("changeCity", val);
    },
    changeCenterBike(val) {
      this.$emit("changeCenterBike", val);
    }
  },
};
</script>
