import axios from 'axios';
import { useAuth } from "../services/AuthService";

const useAxiosInstance = () => {
    const { token, setToken } = useAuth();
    const { refreshToken, setRefreshToken } = useAuth();

    const axiosInstance = axios.create({
        baseURL: 'http://127.0.0.1:3000/api/',
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

    // Response interceptor: Handle errors
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401 && error.response.data.errorCode === 401101) {
                // Perform action on 401 error
                axiosInstance.post('/auth/refresh-token', { refreshToken: refreshToken }).then(res => {
                    setToken(res.data.accessToken);
                    setRefreshToken(res.data.refreshToken);
                }).catch(err => {
                    console.error('Error refreshing token:', err);
                });
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};


export default useAxiosInstance;