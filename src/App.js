
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./components/context/AppContext";
import Header from '../src/components/Header/index';
import Home from "./pages/Home";
import DetailsPodcast from "./pages/Detail";

function App() { 
    const [loading, setLoading] = useState(false);
  const value = {
    loading,
    setLoading,
  };
  return (
    <>
    <div className="App">
    <AppContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:podcastId" element={<DetailsPodcast />} />
        </Routes>
      </AppContext.Provider>
    </div>
    </>
  );
}

export default App;
