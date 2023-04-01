import { BASE_URL } from "./settings"
import time from "../helpers/time"

export default async function getPodcastList() {
    const apiURL = `${BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`;
    let data = [];
    if (time() >= 24 || window.localStorage.getItem('fetchPodcast') === null) {
      data = await fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        window.localStorage.setItem('fetchPodcast', JSON.stringify(response.feed.entry))
        window.localStorage.setItem('LastFetchDate', new Date())
        return  response.feed.entry;
      })
      .catch(err => {
        console.log(err)
      })
    } else {
        data = JSON.parse(window.localStorage.getItem('fetchPodcast'))
    }
    const podcasts = data.map(podcast => {
      const title = podcast.title.label.toUpperCase()
      const image = podcast['im:image'][2].label
      const author = podcast['im:artist'].label.toUpperCase()
      const id = podcast['id'].attributes['im:id']
      return {title, image, author, id}
    })
    return podcasts; 
}