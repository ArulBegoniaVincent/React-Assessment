import axios from "axios";

const API_URL = 'http://localhost:3001/assest';
const getAssets = () => axios.get(API_URL).then((res) => res.data);
const getAsset = (id) => axios.get(`${API_URL}/${id}`).then((res) => res.data);
const createAsset = (asset) => axios.post(API_URL, assest).then((res) => res.data);
const updateAsset = (id, asset) => axios.put(`${API_URL}/${id}`, asset).then((res) => res.data); 
const deleteAsset = (id) => axios.delete(`${API_URL}/${id}`).then((res) => res.data);

export { getAssets, getAsset, createAsset, updateAsset, deleteAsset };