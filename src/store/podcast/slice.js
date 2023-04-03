import { createSlice } from "@reduxjs/toolkit";
import apiGetPodcastList from "../../services/getPodcastList";
import apigetPodcastDetailsList from "../../services/getPodcastDetails";
/* import time from "../helpers/time" */

export const podcastSlice = createSlice({
  name: "podcast",

  initialState: {
    podcastList: [],
    podcastDetailList: [],
    podcastEpisodesList: [],
    podcastDescription: '',
    lastUpdate: null,
    isLoading: false,
  },

  reducers: {
    setPodcastList: (state, actions) => {
      state.podcastList = actions.payload;
      state.lastUpdate = JSON.stringify(new Date());
    },
    setPodcastDetailsList: (state, actions) => {
      state.podcastDetailList = actions.payload;
    },
    setPodcastEpisodesList: (state, actions) => {
      state.podcastEpisodesList = actions.payload;
    },
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
    setPodcastDescription: (state, actions) => {
      state.podcastDescription = actions.payload;
    },
  },
});
//selector
export const getPodcastList = (state) => state.podcast.podcastList;
export const getLastUpdate = (state) => state.podcast.lastUpdate;
export const getPodcastDetailsList = (state) => state.podcast.podcastDetailList;
export const getPodcastEpisodesList = (state) =>
  state.podcast.podcastEpisodesList;
export const getIsLoading = (state) => state.podcast.isLoading;
export const getPodcastDescription = (state) => state.podcast.podcastDescription;
// Action creators are generated for each case reducer function

export const {
  setPodcastList,
  setPodcastDetailsList,
  setPodcastEpisodesList,
  setIsLoading,
  setPodcastDescription,
} = podcastSlice.actions;

export const fetchPodcastList = () => (dispatch, getState) => {
  //decidir si tengo que llamar.
  if (getLastUpdate(getState())) {

  console.log('hola', getLastUpdate(getState()))
    const parseDate = new Date(JSON.parse(getLastUpdate(getState())))
    console.log('hola', parseDate)
    const difference =
      new Date().getMilliseconds - parseDate.getMilliseconds;
    if (difference < 1000 * 60 * 60 * 24) return null;
  }
  dispatch(setIsLoading(true));
  apiGetPodcastList()
    .then((podcastData) => {
      const podcasts = podcastData.map((podcast) => {
        const title = podcast.title.label.toUpperCase();
        const image = podcast["im:image"][2].label;
        const author = podcast["im:artist"].label.toUpperCase();
        const id = podcast["id"].attributes["im:id"];
        const description = podcast.summary?.label;
        return { title, image, author, id, description};
      });
      dispatch(setPodcastList(podcasts));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};
export const fetchPodcastDetailsList = (podcastId) => (dispatch, getState) => {
  //decidir si tengo que llamar.
  if (getLastUpdate(getState())) {
    const parseDate = new Date(JSON.parse(getLastUpdate(getState())))
    const difference =
      new Date().getMilliseconds - parseDate.getMilliseconds;
    if (difference < 1000 * 60 * 60 * 24) return null;
  }
  dispatch(setIsLoading(true));
  apigetPodcastDetailsList(podcastId)
    .then((podcastDetails) => {
      const firstElement = podcastDetails.shift();
      const podcastListFilter = getState().podcast.podcastList.find(pod => pod.id === `${firstElement.trackId}`)
      dispatch(setPodcastDescription(podcastListFilter.description));
      dispatch(setPodcastDetailsList(firstElement));
      dispatch(setPodcastEpisodesList(podcastDetails));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};
export default podcastSlice.reducer;
