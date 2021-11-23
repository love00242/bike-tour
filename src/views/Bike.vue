<template>
  <div>
    <Header />
    <div class="relative">
      <SearchArea
        @changeCity="changeCity"
        :bikeData="bikeData"
        @changeCenterBike="changeCenterBike"
      />
      <SearchTab :tabArr="tabArr" />
      <button class="btn-position left-114 top-6 z-1">
        <font-awesome-icon icon="crosshairs" />
      </button>
      <BikeMap :bikeData="bikeData" :changeCenter="changeCenter" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchArea from "@/components/SearchArea.vue";
import SearchTab from "@/components/SearchTab.vue";
import BikeMap from "@/components/BikeMap.vue";
import { apiBikeStation, apiBikeStationInfo } from "@/utils/api.js";
export default {
  components: {
    Header,
    SearchArea,
    SearchTab,
    BikeMap,
  },
  data() {
    return {
      tabArr: [
        { title: "找單車", type: 0, icon: "bicycle" },
        { title: "找車位", type: 1, icon: "parking" },
      ],
      nowCity: "",
      bikeData: [],
      changeCenter: null,
    };
  },
  computed: {},
  methods: {
    changeCity(val) {
      this.nowCity = val;
      this.bikeData = [];
      this.getBikeLocation();
    },
    changeCenterBike(val) {
      this.changeCenter = val;
    },
    setBikeData(bikeStation, bikeStationInfo) {
      const list = [];
      bikeStation.forEach((element) => {
        const target = bikeStationInfo.find(
          (val) => val.StationID === element.StationID
        );
        const obj = Object.assign(element, target);
        list.push(obj);
      });
      this.bikeData = list;
    },
    async getBikeLocation() {
      try {
        const bikeStation = await apiBikeStation(this.nowCity);
        const bikeStationInfo = await apiBikeStationInfo(this.nowCity);
        if (bikeStation.status === 200 && bikeStationInfo.status === 200) {
          this.setBikeData(bikeStation.data, bikeStationInfo.data);
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {},
};
</script>
