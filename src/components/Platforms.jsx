import React, { useEffect, useState } from "react";
import PlatformTable from "./tables/PlatformTable";
import useAxiosInstance from "../config/api";

const Platforms = () => {
    const axios = useAxiosInstance();
    const [platforms, setPlatforms] = useState([]);

    // Fetch platforms from API
    const fetchPlatforms = async () => {
        try {
            const response = await axios.get('/platforms/me');
            setPlatforms(response.data);
        } catch (error) {
            console.error('Error fetching platforms:', error);
        }
    };

    useEffect(() => {
        fetchPlatforms();
    }, []);

    const handleDelete = async (id) => {
        setPlatforms(platforms.filter((p) => p.id !== id));
        try {
            await axios.delete(`/platforms/delete/${id}`);
            console.log('Platform deleted:', id);
        } catch (error) {
            console.error('Error deleting platform:', error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <div className="col-4 col-lg-2">
                </div>

                {/* Main Content */}
                <div className="col-md-8 ms-sm-auto col-lg-10 px-md-4">
                    <h2 className="mt-4">Manage Platforms</h2>
                    <PlatformTable platforms={platforms} onDelete={handleDelete} setPlatforms={setPlatforms} />
                </div>
            </div>
        </div>
    );
};

export default Platforms;
