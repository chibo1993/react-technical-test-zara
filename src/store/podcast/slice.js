import { createSlice } from "@reduxjs/toolkit";
import apiGetPodcastList from "../../services/getPodcastList";
/* import time from "../helpers/time" */

export const podcastSlice = createSlice({
  name: "podcast",

  initialState: {
    podcastList: [],
    lastUpdate: null,
  },

  reducers: {
    setPodcastList: (state, actions) => {
      state.podcastList = actions.payload;
      state.lastUpdate = new Date()
    },
  },
});
//selector
export const getPodcastList = (state) => state.podcast.podcastList;
export const getLastUpdate = (state) => state.podcast.lastUpdate;
// Action creators are generated for each case reducer function

export const { setPodcastList } = podcastSlice.actions;

export const fetchPodcastList = () => (dispatch, getState) => {
  //decidir si tengo que llamar.
  if (getLastUpdate(getState())) {
    const difference = new Date().getMilliseconds - getLastUpdate(getState()).getMilliseconds()
    if (difference < (1000 * 60 * 60 * 24))  return null
  }
    apiGetPodcastList()
    .then(podcastData => {
      const podcasts = podcastData.map(podcast => {
        const title = podcast.title.label.toUpperCase()
        const image = podcast['im:image'][2].label
        const author = podcast['im:artist'].label.toUpperCase()
        const id = podcast['id'].attributes['im:id']
        return {title, image, author, id}
        })
      dispatch(setPodcastList(podcasts))
    })
};

export default podcastSlice.reducer;
