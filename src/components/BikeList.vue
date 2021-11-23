<template>
  <ul class="overflow-y-auto px-1.5">
    <li
      v-for="(item, i) in bikeData"
      :key="i"
      class="flex flex-col pt-4 border-solid border-b border-line cursor-pointer"
      @click="getBikeStation(item)"
    >
      <h2 class="text-xl font-bold text-green-dark text-left mb-2">
        {{ setName(item.StationName.Zh_tw) }}
      </h2>
      <div class="flex mb-3">
        <div
          :class="[
            'flex-col rounded-lg bg-skin w-2/4 mr-4 py-1 text-green-dark',
            { closeItem: !item.AvailableRentBikes },
          ]"
        >
          <small class="text-mi font-bold"
            ><font-awesome-icon icon="bicycle" />可租借</small
          >
          <p class="text-2xl font-bold">{{ item.AvailableRentBikes }}</p>
        </div>
        <div
          :class="[
            'flex-col rounded-lg bg-skin w-2/4 py-1 text-green-dark',
            { closeItem: !item.AvailableReturnBikes },
          ]"
        >
          <small class="text-mi font-bold"
            ><font-awesome-icon icon="parking" />可停車</small
          >
          <p class="text-2xl font-bold">{{ item.AvailableReturnBikes }}</p>
        </div>
      </div>
      <span
        :class="[
          'rounded-md border-solid border border-orange font-bold text-orange py-1 w-22 mb-3.5',
          {'closeStatus': !item.AvailableRentBikes && !item.AvailableReturnBikes},
        ]"
        >{{ setStationStatus(item) }}</span
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: ["bikeData"],
  data() {
    return {};
  },
  watch: {
    bikeData(val) {
      if(val) {
        this.getBikeStation(val[0])
      }
    }
  },
  computed: {},
  methods: {
    setName(name) {
      return name.indexOf("_") > -1 ? name.split("_")[1] : name;
    },
    setStationStatus(val) {
      const { ServiceType, AvailableRentBikes, AvailableReturnBikes } = val;
      if (
        ServiceType === 0 ||
        ServiceType === 2 ||
        (!AvailableRentBikes && !AvailableReturnBikes)
      ) {
        return "暫停營運";
      } else {
        if (AvailableRentBikes && AvailableReturnBikes) {
          return "可借可還";
        } else if (AvailableRentBikes && !AvailableReturnBikes) {
          return "只可借車";
        } else {
          return "只可還車";
        }
      }
    },
    getBikeStation(val) {
      console.log(val);
      this.$emit("changeCenterBike", val);
    }
  },
  mounted() {
    if(this.bikeData?.[0]) {
      this.getBikeStation(this.bikeData[0])
    }
  },
};
</script>

<style lang="postcss" scoped>
.closeItem {
  @apply bg-gray-light text-gray;
}
.closeStatus {
  @apply border-gray text-gray;
}
</style>