import './App.css';
import { useState } from 'react';
import AssetForm from './Components/AssetForm';
import AssetList from './Components/AssetList';

function App() {
  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleEdit = (asset) => {
    setSelectedAsset(asset);
  }

  const handleSave = () => {
    setSelectedAsset(null);
  }

  return (
    <div className="App"> 
      <h1>Asset Management System</h1>
      <AssetForm selectedAsset={selectedAsset} onSave={handleSave} /> 
      <AssetList onEdit={handleEdit} /> 
    </div>
  );
}

export default App;

