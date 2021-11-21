<template>
  <div>
    <Header />
    <div class="relative">
      <SearchArea @changeCity="changeCity" />
      <SearchTab :tabArr="tabArr" />
      <button class="btn-position left-114 top-6 z-1">
        <font-awesome-icon icon="crosshairs" />
      </button>
      <BikeMap :bikeData="bikeData" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchArea from "@/components/SearchArea.vue";
import SearchTab from "@/components/SearchTab.vue";
import BikeMap from "@/components/BikeMap.vue";
import { apiBikeStation } from "@/utils/api.js";
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
      nowCity: '',
      bikeData: [],
    };
  },
  computed: {},
  methods: {
    changeCity(val) {
      this.nowCity = val;
      this.getBikeLocation();
    },
    getBikeLocation() {
      apiBikeStation(this.nowCity).then(res=> {
        if(res.status === 200) {
          console.log(res,"success");
        }
      }).catch(err=> {
        console.log(err);
      })
    }
  },
  mounted() {},
};
</script>
