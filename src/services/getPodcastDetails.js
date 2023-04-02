import { BASE_URL, PROXY } from "./settings";

export default async function getPodcastDetails(podcastId) {
    console.log('API', podcastId)
    const apiURL = `${BASE_URL}/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=200`;
    const data = await fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        return response.results
        }) 
    return data;
}