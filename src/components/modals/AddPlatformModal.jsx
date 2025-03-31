import React, { useEffect, useState } from "react";
import useAxiosInstance from "../../config/api"; // Assuming you have a custom axios instance

const AddPlatformModal = ({ show, onClose, onAdd }) => {
    const [selectedPlatform, setSelectedPlatform] = useState("");
    const [platformToken, setPlatformToken] = useState("");
    const [platforms, setPlatforms] = useState([]);

    const axios = useAxiosInstance(); // Assuming you have a custom axios instance

    useEffect(() => {
        const fetchPlatforms = async () => {
            try {
                const response = await axios.get("/platforms/all"); // Adjust the API endpoint as needed
                const data = await response.data;
                setPlatforms(data);
            } catch (error) {
                console.error("Error fetching platforms:", error);
            }
        };

        fetchPlatforms();
    }, [show])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedPlatform || !platformToken) return;
        onAdd({ platform: selectedPlatform, token: platformToken });
        setSelectedPlatform("");
        setPlatformToken("");
        onClose();
    };

    if (!show) return null; // Ensure modal is not rendered when hidden

    return (
        <>
            {/* Backdrop Overlay */}
            <div className="modal-backdrop fade show"></div>

            {/* Modal */}
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h5 className="modal-title">Add Platform</h5>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                {/* Platform Selection */}
                                <div className="mb-3">
                                    <label className="form-label">Select Platform</label>
                                    <select
                                        className="form-select"
                                        value={selectedPlatform.name}
                                        onChange={(e) => setSelectedPlatform(e.target.value)}
                                    >
                                        <option value="">Choose...</option>
                                        {platforms.map((platform) => (
                                            <option key={platform.id} value={platform.id}>
                                                {platform.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Platform Token Input */}
                                <div className="mb-3">
                                    <label className="form-label">Platform Token</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter platform token"
                                        value={platformToken}
                                        onChange={(e) => setPlatformToken(e.target.value)}
                                    />
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="btn btn-primary w-100">
                                    Add Platform
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddPlatformModal;
