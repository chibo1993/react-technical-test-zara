import { BASE_URL } from "./settings"
import time from "../helpers/time"

export default function getPodcastList() {
    const apiURL = `${BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`;
     return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        return  response.feed.entry;
      }) 
}