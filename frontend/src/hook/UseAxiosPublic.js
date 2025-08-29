import axios from 'axios';

const UseAxiosPublic = () => {
    const axiosPublic=axios.create({
         baseURL: 'https://organicfarm-wal6.vercel.app/api',
    })
    return axiosPublic;
};

export default UseAxiosPublic;