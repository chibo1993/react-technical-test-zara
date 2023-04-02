
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./components/context/AppContext";
import Header from '../src/components/Header/index';
import Home from "./pages/Podcast/Home";
import DetailsPodcast from "./pages/Podcast/Detail/index";
import EpisodePodcast from "./pages/Podcast/Episode/index"
import {Provider} from "react-redux"
import store from "./store"

function App() { 
    const [loading, setLoading] = useState(false);
  const value = {
    loading,
    setLoading,
  };
  return (
    <Provider store={store} >
    <div className="App">
    <AppContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:podcastId" element={<DetailsPodcast />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodePodcast />} />
        </Routes>
      </AppContext.Provider>
    </div>
    </Provider>
  );
}

export default App;
