import { configureStore } from '@reduxjs/toolkit'
import podcastsReducer from './podcast/slice'

export default configureStore({
  reducer: {
    podcast: podcastsReducer,
  },
})