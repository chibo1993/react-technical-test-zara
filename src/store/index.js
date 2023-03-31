import { configureStore } from '@reduxjs/toolkit'
import podcastsReducer from '../store/podcast/reducer'

export default configureStore({
  reducer: {
    podcasts: podcastsReducer,
  },
})