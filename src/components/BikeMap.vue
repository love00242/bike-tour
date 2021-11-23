<template>
  <l-map
    ref="myMap"
    :zoom="zoom"
    :center="center"
    :options="options"
    class="z-0"
    style="height: calc(100vh - 64px)"
  >
    <!-- 載入圖資 -->
    <l-tile-layer :url="url" :attribution="attribution" />
    <!-- 自己所在位置 -->
    <v-marker-cluster>
      <l-marker ref="location" :lat-lng="center">
        <l-icon
          :icon-url="icon.type.green"
          :icon-size="icon.iconSize"
          :icon-anchor="icon.iconAnchor"
          :popup-anchor="icon.popupAnchor"
        >
        </l-icon>
        <l-popup style="min-width: 200px">{{
          changeCenter && changeCenter.StationName.Zh_tw
        }}</l-popup>
      </l-marker>
    </v-marker-cluster>
    <!-- 創建標記點 -->
    <v-marker-cluster>
      <l-marker
        :lat-lng="[
          item.StationPosition.PositionLat,
          item.StationPosition.PositionLon,
        ]"
        v-for="(item, i) in bikeData"
        :key="i"
      >
        <!-- 標記點樣式判斷 -->
        <l-icon
          :icon-url="icon.type.green"
          :icon-size="icon.iconSize"
          :icon-anchor="icon.iconAnchor"
          :popup-anchor="icon.popupAnchor"
        />
        <!-- 彈出視窗 -->
        <l-popup>
          {{ item.StationName.Zh_tw }}
        </l-popup>
      </l-marker>
    </v-marker-cluster>
  </l-map>
</template>

<script>
export default {
  props: ["bikeData", "changeCenter"],
  data() {
    return {
      zoom: 18, //放大級別(數值為0-20)
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", //圖資url
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`, //版權資訊
      options: {
        zoomControl: false, //放大縮小的控件是否顯示(預設true)
      },
      icon: {
        type: {
          //url
          green: "/images/bike-position.png",
          gold: "/images/user-position.png",
        },
        // shadowUrl: "",
        iconSize: [30, 40], //icon的寬高
        iconGoldSize: [40, 40],
        iconAnchor: [12, 41], //icon的X軸與Y軸偏移量
        popupAnchor: [1, -34], //彈跳視窗的X軸與Y軸偏移量
        // shadowSize: [41, 41], //陰影圖片的寬度與高度
      },
    };
  },
  watch: {
    center(val) {
      if (val) {
        console.log("opennnnn");
        this.$refs.location.mapObject.openPopup();
      }
    },
  },
  computed: {
    center() {
      if (this.changeCenter) {
        const { PositionLat, PositionLon } = this.changeCenter.StationPosition;
        return [PositionLat, PositionLon];
      }
      return [25.0408578889, 121.567904444];
    },
  },
  methods: {},
  mounted() {
    // 等地圖創建後執行
    this.$nextTick(() => {
      // 獲得目前位置
      navigator.geolocation.getCurrentPosition((position) => {
        const p = position.coords;
        // 將中心點設為目前的位置
        this.center = [p.latitude, p.longitude];
        // 將目前的位置的標記點彈跳視窗打開
        this.$refs.location.mapObject.openPopup();
      });
    });
  },
};
</script>

<style lang="postcss" scoped>
</style>
