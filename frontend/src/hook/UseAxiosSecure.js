import axios from 'axios';

const UseAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://organicfarm-wal6.vercel.app/api',
    })

    // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {
        const token=localStorage.getItem('token')
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
        { synchronous: true, runWhen: () => true }
    );

    // Add a response interceptor
    axiosSecure.interceptors.response.use(function onFulfilled(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function onRejected(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default UseAxiosSecure;