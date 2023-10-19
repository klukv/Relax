import axios from "axios";
import { URL_API } from "../utils/const";

const $host = axios.create({
  baseURL: URL_API,
});

export const getInfoCard = async (url: string) => {
    const {data} = await $host.get(url);
    return data;
};

export const getInfoSearch = async (urlSearch: string) => {
    const {data} = await $host.get(urlSearch);
    return data;
}
