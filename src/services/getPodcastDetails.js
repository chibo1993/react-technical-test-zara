import { BASE_URL, PROXY } from "./settings";
import time from "../helpers/time"

export default async function getPodcastDetails({}) {
    const podcastId = '1678378239'
    const apiURL = `${PROXY}${BASE_URL}/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=200`;


    let data = [];
    if (time() < 24 || window.localStorage.getItem('fetchPodcastDetail') === null) {
        data = await fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            console.log('response', response);
        //window.localStorage.setItem('fetchPodcastDetail', JSON.stringify(response.feed.entry))
        //window.localStorage.setItem('LastFetchDate', new Date())
        }) 
    }
}