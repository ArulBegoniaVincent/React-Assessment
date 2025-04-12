import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Asset.css";
 
function AssetList({ onEdit, onDelete }) {
  const [assets, setAssets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
 
  useEffect(() => {
axios.get("http://localhost:5000/asset")
      .then(res => setAssets(res.data))
      .catch(err => console.log("Error fetching assets", err));
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    if (searchValue) {
      axios.get(`http://localhost:5000/asset?name=${searchValue}`)
        .then(res => setAssets(res.data))
        .catch(err => console.log("Error fetching assets", err));
    } else {
      axios.get("http://localhost:5000/asset")
        .then(res => setAssets(res.data))
        .catch(err => console.log("Error fetching assets", err));
    }
  };
 
  const handleDelete = (id) => {
axios.delete(`http://localhost:5000/asset/${id}`)
.then(() => setAssets(assets.filter(asset => asset.id !== id)))
      .catch(err => console.log("Error deleting assets", err));
  };
 
  return (
    <div>
      <h2>Asset List</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by name" />
      {assets.map(asset => (
        <div key={asset.id} >
          <p>Name: {asset.name}</p>
          <p>Date: {asset.date}</p>
          <p>Assest Value: {asset.value}</p>
          <p>Asset Location:{asset.location}</p>
          <button onClick={() => onEdit(asset)}>Edit</button>
          <button className="deletebutton" onClick={() => handleDelete(asset.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
 
export default AssetList;
