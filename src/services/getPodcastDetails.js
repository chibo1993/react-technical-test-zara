import { BASE_URL, PROXY } from "./settings";
import time from "../helpers/time"

export default async function getPodcastDetails() {

    const podcastId = '1678378239'
    const apiURL = `${BASE_URL}/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=200`;
    const data = await fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        return response.results
        }) 
    return data;
}