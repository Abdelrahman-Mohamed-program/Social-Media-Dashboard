import axios from 'axios';
import { useAuth } from "../provider/AuthProvider";

const useAxiosInstance = () => {
    const { token } = useAuth();

    const axiosInstance = axios.create({
        baseURL: 'http://127.0.0.1:5185/api/',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Add a request interceptor
    axiosInstance.interceptors.request.use(
        (config) => {
            if (token) {
                // Attach the token to the Authorization header
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};


export default useAxiosInstance;