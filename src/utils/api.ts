import axios from "axios";

export const urlApi = axios.create({
    baseURL: 'https://fakestoreapi.com',
});