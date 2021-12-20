import axiosClient from "./axiosClient";

const productApi = {
    getAll: (params) => {
        const url = "/posts";
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/posts?id=${id}`;
        return axiosClient.get(url);
    },
};

export default productApi;