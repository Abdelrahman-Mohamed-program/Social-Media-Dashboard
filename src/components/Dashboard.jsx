

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <div className="col-4 col-lg-2">
                    <h4 className="mb-4">Platforms</h4>
                    <ul className="list-unstyled">
                        <li className="p-2 mb-2 rounded">Facebook</li>
                        <li className="p-2 mb-2 rounded">YouTube</li>
                        <li className="p-2 mb-2 rounded">TikTok</li>
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
                                <h3>3.4K</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 text-center">
                                <h5>Shares</h5>
                                <h3>1.2K</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 text-center">
                                <h5>Comments</h5>
                                <h3>900</h3>
                            </div>
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div className="card p-4">
                        <h4>Analytics Chart</h4>
                        <div className="chart-placeholder bg-light" style={{ height: "250px" }}></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;