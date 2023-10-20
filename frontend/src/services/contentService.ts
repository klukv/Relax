import axios from "axios";
import { URL_API, URL_API_SEARCH, URL_GET_INFO } from "../utils/const";

const $host = axios.create({
  baseURL: URL_API,
});

export const getInfoCard = async (name: string) => {
    const {data} = await $host.get(URL_GET_INFO + '?name=' + name);
    return data;
};

export const getInfoSearch = async (name: string) => {
    const {data} = await $host.get(URL_API_SEARCH + '?name=' + name);
    return data;
}
