import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Asset.css';
 
function AssetForm({ selectedAsset, onSave }) {
  const [asset, setAsset] = useState({
    name: '',
    date: '',
    value: '',
    location: ''
  });
 
 useEffect(() => {
    if (selectedAsset) setAsset(selectedAsset);
    else setAsset({ name: '', date: '', value: '', location: '' });
  }, [selectedAsset]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAsset({ ...asset, [name]: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
if (asset.id) {
axios.put(`http://localhost:5000/asset/${asset.id}`, asset)
        .then(res => onSave(res.data))
        .catch(err => console.log("Error updating assets", err));
    } else {
axios.post(`http://localhost:5000/asset`, asset)
        .then(res => onSave(res.data))
        .catch(err => console.log("Error creating assets", err));
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h2>{asset.id ? "Update Asset" : "Add Asset"}</h2>
      <input type="text" name="name" placeholder="Name" value={asset.name} onChange={handleChange} required />
      <input type="text" name="date" placeholder="Bought Date" value={asset.date} onChange={handleChange} required />
      <input type="text" name="value" placeholder="Asset Value" value={asset.value} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={asset.location} onChange={handleChange} required />
      <button type="submit">{asset.id ? "Update" : "Add"}</button>
    </form>
  );
}
 
export default AssetForm;



