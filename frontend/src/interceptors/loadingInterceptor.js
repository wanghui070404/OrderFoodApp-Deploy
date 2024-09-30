import axios from "axios";

export const setLoadingInterceptor = ({ showLoading, hideLoading }) => {
    axios.interceptors.request.use(config => {
        if (!(config.data instanceof FormData))
            showLoading();
        return config;
    },
        error => {
            hideLoading();
            return Promise.reject(error);
        });
    axios.interceptors.response.use(response => {
        hideLoading();
        return response;
    },
        error => {
            hideLoading();
            return Promise.reject(error);
        }
    );
};

export default setLoadingInterceptor;