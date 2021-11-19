<template>
  <div>
    <Header />
    <div class="relative">
      <SearchArea />
      <SearchTab :tabArr="tabArr" />
      <button class="btn-position left-114 top-5">
        <font-awesome-icon icon="crosshairs" />
      </button>
      <l-map
        ref="myMap"
        :zoom="zoom"
        :center="center"
        :options="options"
        style="height: 100vh"
      >
        <!-- 載入圖資 -->
        <l-tile-layer :url="url" :attribution="attribution" />
        <!-- 自己所在位置 -->
        <l-marker ref="location" :lat-lng="center">
          <l-popup>你的位置</l-popup>
        </l-marker>
        <!-- 創建標記點 -->
        <l-marker :lat-lng="item.local" v-for="item in data" :key="item.id">
          <!-- 標記點樣式判斷 -->
          <l-icon
            :icon-url="
              item.name === '夢時代購物中心' ? icon.type.gold : icon.type.black
            "
            :shadow-url="icon.shadowUrl"
            :icon-size="icon.iconSize"
            :icon-anchor="icon.iconAnchor"
            :popup-anchor="icon.popupAnchor"
            :shadow-size="icon.shadowSize"
          />
          <!-- 彈出視窗 -->
          <l-popup>
            {{ item.name }}
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchArea from "@/components/SearchArea.vue";
import SearchTab from "@/components/SearchTab.vue";

export default {
  components: {
    Header,
    SearchArea,
    SearchTab,
  },
  data() {
    return {
      tabArr: [
        { title: "找單車", type: 0, icon: "bicycle" },
        { title: "找車位", type: 1, icon: "parking" },
      ],
      //模擬資料
      data: [
        { id: 1, name: "夢時代購物中心", local: [22.595153, 120.306923] },
        { id: 2, name: "漢神百貨", local: [22.61942, 120.296386] },
        { id: 3, name: "漢神巨蛋", local: [22.669603, 120.302288] },
        { id: 4, name: "大統百貨", local: [22.630748, 120.318033] },
      ],
      zoom: 13, //放大級別(數值為0-20)
      center: [22.612961, 120.304167], //中心點
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", //圖資url
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`, //版權資訊
      options: {
        zoomControl: true, //放大縮小的控件是否顯示(預設true)
      },
      icon: {
        type: {
          black:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
          gold: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
        },
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      },
    };
  },
  computed: {},
  mounted() {
    // 等地圖創建後執行
    this.$nextTick(() => {
      // 獲得目前位置
      navigator.geolocation.getCurrentPosition(position => {
        const p = position.coords;
        // 將中心點設為目前的位置
        this.center = [p.latitude, p.longitude];
        // 將目前的位置的標記點彈跳視窗打開
        this.$refs.location.mapObject.openPopup();
      });
    });
  }
};
</script>
