import axios from "axios";
import * as common  from "@/utils/common";

const api = axios.create({
    baseURL: "https://ptx.transportdata.tw/MOTC/v2/",
    dataType: "json",
    headers: common.getAuthorizationHeader(),
});

export const apiBikeStation = (url, params) => api.get(`Bike/Station/${url}`, {params});
export const apiBikeStationInfo = (url, params) => api.get(`Bike/Availability/${url}`, {params});
// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON
// $filter: "contains(Name,'台北')"