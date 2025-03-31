import { useEffect, useState } from "react";
import { formatNumber } from "../utils/numUtils";
import Chart from "chart.js/auto"; // Important for Chart.js
import { Line } from "react-chartjs-2";
import useAxiosInstance, { baseURL } from "../config/api";
import { Link } from "react-router-dom";
import AddPlatformModal from "./modals/AddPlatformModal";

const Dashboard = () => {
    const axios = useAxiosInstance();

    const [data, setData] = useState({
        platform: null,
        summary: {
            likes: 0,
            shares: 0,
            comments: 0
        },
        chart_data: [
            {
                date: "2025-03-01",
                likes: 0,
                shares: 0,
                comments: 0
            },
            {
                date: "2025-03-02",
                likes: 0,
                shares: 0,
                comments: 0
            },
            {
                date: "2025-03-03",
                likes: 0,
                shares: 0,
                comments: 0
            }
        ]
    })

    const [showAddPlatformModal, setShowAddPlatformModal] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [platforms, setPlatforms] = useState([]);

    const fetchAnalytics = async () => {
        try {
            const response = await axios.get(`/analytics?platform=${selectedPlatform.toLowerCase()}`);
            const data = await response.data;
            setData(data);
        } catch (error) {
            console.error('Error fetching analytics data:', error);
        }
    };

    const fetchPlatforms = async () => {
        try {
            const response = await axios.get('/platforms/me');
            const data = response.data;
            setPlatforms(data);

            if (!selectedPlatform && data.length > 0) {
                setSelectedPlatform(data[0]);
            }
        } catch (error) {
            console.error('Error fetching platforms:', error);
        }
    };

    useEffect(() => {
        if (!selectedPlatform) {
            return;
        }
        fetchAnalytics();
    }, [selectedPlatform]);

    useEffect(() => {
        fetchPlatforms();
    }, []);

    const handlePlatformChange = (platform) => {
        setSelectedPlatform(platform);
    };

    const handleAddPlatform = async (data) => {
        console.log("Platform added:", data);
        try {
            const response = await axios.post('/platforms/add', {
                platformId: data.platform,
                token: data.token
            });
            const newPlatform = await response.data;
            setPlatforms([...platforms, newPlatform]);
        }
        catch (error) {
            console.error('Error adding platform:', error);
        }
    };

    const options = {
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: true }
        }
    }

    const prepareChartData = () => {
        return {
            labels: data.chart_data.map(item => item.date),
            datasets: [{
                data: data.chart_data.map(item => item.likes),
                borderColor: "red",
                fill: false,
                label: "Likes"
            }, {
                data: data.chart_data.map(item => item.shares),
                borderColor: "green",
                fill: false,
                label: "Shares"
            }, {
                data: data.chart_data.map(item => item.comments),
                borderColor: "blue",
                fill: false,
                label: "Comments"
            }]
        }
    }

    return (
        <div className="container mt-4">
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-4 col-lg-2">
                        <ul className="list-unstyled">
                            {platforms && platforms.length > 0 ? platforms.map(platform => (
                                <li
                                    key={platform.id}
                                    className={`p-2 mb-2 rounded d-flex ${selectedPlatform === platform.name ? 'bg-primary text-white' : 'bg-light'}`}
                                    onClick={() => handlePlatformChange(platform.name)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img
                                        src={`${baseURL}${platform.icon}`}
                                        alt={platform.description}
                                        className="me-2"
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                    {platform.name}
                                </li>
                            )) : (
                                <div>
                                    <button className="btn btn-primary" onClick={() => setShowAddPlatformModal(true)}>
                                        Add Platform
                                    </button>

                                    {showAddPlatformModal && <AddPlatformModal title="Add" show={showAddPlatformModal} onClose={() => setShowAddPlatformModal(false)} onAdd={handleAddPlatform} />}
                                </div>
                            )}
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="col-8 col-lg-10">
                        {/* Navbar */}
                        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                            <h2>Dashboard</h2>
                            <div className="profile-circle bg-secondary rounded-circle"></div>
                        </div>

                        {/* Statistics */}
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="card p-3 text-center">
                                    <h5>Likes</h5>
                                    <h3>{formatNumber(data.summary.likes)}</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3 text-center">
                                    <h5>Shares</h5>
                                    <h3>{formatNumber(data.summary.shares)}</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3 text-center">
                                    <h5>Comments</h5>
                                    <h3>{formatNumber(data.summary.comments)}</h3>
                                </div>
                            </div>
                        </div>

                        {/* Chart Section */}
                        <div className="card p-4">
                            <h4>Analytics Chart</h4>
                            <div className="chart-placeholder bg-light" style={{ height: "250px" }}>
                                <Line data={prepareChartData()} options={options} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;