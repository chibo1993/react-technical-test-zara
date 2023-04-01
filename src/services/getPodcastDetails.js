import { BASE_URL, PROXY } from "./settings";
import time from "../helpers/time"

export default async function getPodcastDetails() {
    console.log('--->');
    const podcastId = '1678378239'
    const apiURL = `${BASE_URL}/lookup?id=${podcastId}`;
    console.log('apiURL', apiURL)

    let data = [];
    if (time() >= 24 || window.localStorage.getItem('fetchPodcastDetail') === null) {
        data = await fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        window.localStorage.setItem('fetchPodcastDetail', JSON.stringify(response.results))
        window.localStorage.setItem('LastFetchDate', new Date())
        console.log('response.results', response.results);
        return response.results
        })
        .catch(err => {
         console.log(err)
        }) 
    } else {
        data = JSON.parse(window.localStorage.getItem('fetchPodcastDetail'))
    }
    return data;
}