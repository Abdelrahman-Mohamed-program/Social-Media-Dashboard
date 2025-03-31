import React from "react";
import { useState } from "react";
import useAxiosInstance from "../../config/api";
import AddPlatformModal from "../modals/AddPlatformModal";

const PlatformTable = ({ platforms, setPlatforms, onDelete }) => {
    const [showAddPlatformModal, setShowAddPlatformModal] = useState(false);
    const axios = useAxiosInstance();

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

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Platform</th>
                        <th>Token</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {platforms.length > 0 ? (
                        platforms.map((platform, index) => (
                            <tr key={platform.id}>
                                <td>{index + 1}</td>
                                <td>{platform.name}</td>
                                <td className="text-truncate" style={{ maxWidth: "200px" }}>
                                    {platform.token}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => onDelete(platform.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center text-muted">
                                No platforms registered
                            </td>
                        </tr>
                    )}
                    {/* Add New Platform Button */}
                    <tr>
                        <td colSpan="4">
                            {/* <button className="btn btn-primary w-100" onClick={handleAddNew}>
                                + Add New Platform
                            </button> */}
                            <div>
                                <button className="btn btn-primary" onClick={() => setShowAddPlatformModal(true)}>
                                    Add Platform
                                </button>

                                {showAddPlatformModal && <AddPlatformModal title="Add" show={showAddPlatformModal} onClose={() => setShowAddPlatformModal(false)} onAdd={handleAddPlatform} />}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PlatformTable;
