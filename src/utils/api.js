import axios from "axios";
import * as common  from "@/utils/common";

const api = axios.create({
    baseURL: "https://ptx.transportdata.tw/MOTC/v2/",
    dataType: "json",
    headers: common.getAuthorizationHeader(),
});

export const apiBikeStation = (url, parm = null) => api.get(`Bike/Station/${url}`, {parm});
export const apiBikeStationInfo = (url, parm = null) => api.get(`Bike/Availability/${url}`, {parm});
// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON
// $filter: "contains(Name,'台北')"