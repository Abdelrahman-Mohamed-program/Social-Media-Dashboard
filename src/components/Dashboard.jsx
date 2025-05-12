import { useEffect, useRef, useState } from "react";
import { formatNumber } from "../utils/numUtils";
import Chart from "chart.js/auto"; // Important for Chart.js
import { Line } from "react-chartjs-2";
import useAxiosInstance, { baseURL } from "../config/api";
import AddPlatformModal from "./modals/AddPlatformModal";
import { useAuth } from "../services/AuthService";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from "motion/react";

ChartJS.register(ArcElement, Tooltip, Legend);
const Dashboard = () => {
    const axios = useAxiosInstance();
  const {username}=useAuth();
  
   
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
            const response = await axios.get(`/analytics/p/${selectedPlatform.id}`);
            const data = await response.data;
            setData(data);
            setUsername()
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

    const statsRef = useRef();
  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
const socialStats = [
  {
    platform: "Facebook",
    followers: 10328,
    icon: <FaFacebook style={{ color: "#3b5998" }} />,
    stats: [300, 200, 100], // likes, comments, shares
    colors: ["#3b5998", "#8b9dc3", "#dfe3ee"],
  },
  {
    platform: "Instagram",
    followers: 17536,
    icon: <FaInstagram style={{ color: "#E1306C" }} />,
    stats: [250, 300, 150],
    colors: ["#E1306C", "#F77737", "#C13584"],
  },
  {
    platform: "Twitter",
    followers: 107291,
    icon: <FaTwitter style={{ color: "#1DA1F2" }} />,
    stats: [180, 240, 160],
    colors: ["#1DA1F2", "#AAB8C2", "#657786"],
  },
];

    return (
        <div className="container mt-4">
            <div className="container-fluid ">
      <div className="row justify-content-center align-items-center">
                    {/* Sidebar */}
                    <div className="col-4 col-lg-2">
                        <ul className="list-unstyled">
                            {platforms && platforms.length > 0 ? platforms.map(platform => (
                                <li
                                    key={platform.id}
                                    className={`p-2 mb-2 rounded d-flex ${selectedPlatform.id === platform.id ? 'bg-primary text-white' : 'bg-light'}`}
                                    onClick={() => handlePlatformChange(platform)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img
                                        src={`${baseURL}${platform.icon}`}
                                        alt={platform.name}
                                        className="me-2"
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                    {platform.name}
                                </li>
                            )):<></> }
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="col-8 col-lg-10">
                        {/* Navbar */}
                        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                            <h2>Dashboard</h2>
                            <div className="profile-circle bg-secondary rounded-circle"></div>
                        </div>
                        {/* Header */}
                       <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="w-100 py-5 mb-4 text-center text-white"
                          style={{
                            background: "linear-gradient(rgba(0, 123, 255, 0.6), rgba(0, 123, 255, 0.6))",
                            borderRadius: "1rem",
                            backdropFilter: "blur(5px)",
                           }}
                        >
                             <h1 className="display-4 fw-bold dancing-font">Hello {username} 👋</h1>
                             <p className="lead comic-relief-regular">Welcome to your social media dashboard</p>
                             <button className="btn btn-light mt-3 px-4 py-2 fw-semibold" onClick={scrollToStats}>
                               Let’s See Your Analysis
                             </button>
                        </motion.div>
                   {/* Social Cards */}
          <div className="container">
               {socialStats.map((item, idx) => (
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }} key={idx} className="row align-items-center mb-4">
               {/* Card */}
               <div className="col-md-6">
                 <div className="card p-4 shadow-sm rounded h-100">
                   <div className="card-header d-flex gap-2" style={{ color: "black" }}>
                     <div>{item.icon}</div>
                     <h5 className="mb-0">{item.platform}</h5>
                   </div>
                   <div className="card-body">
                     <h3>{item.followers.toLocaleString()}</h3>
                     <p className="mb-3 text-muted">Followers</p>
                   </div>
                 </div>
               </div>

      {/* Donut Chart */}
      <div className="col-md-6 text-center mx-auto">
        <h6 className="mb-2">{item.platform} Engagement</h6>
        <div className="mx-auto"style={{ width: "150px", height: "150px"}}>
          <Doughnut
            data={{
              labels: ["Likes", "Comments", "Shares"],
              datasets: [
                {
                  data: item.stats, // pass likes, comments, shares
                  backgroundColor: item.colors,
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              cutout: "70%",
              plugins: {
                      legend: { display: true, position: "bottom" },
            },
            }}
          />
            </div>
          </div>
        </motion.div>
  ))}
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
                        <div className="card p-4" ref={statsRef}>
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