import {useEffect, useState} from 'react'
import getPodcastDetails from '../services/getPodcastDetails';

export default function useFetchPodcastDetail({keyword} = {keyword: ''}) {
    const [podcasts, setPodcasts] = useState([])
    console.log('popop', getPodcastDetails());
    useEffect(function () {
        getPodcastDetails()
        .then(pod =>
            setPodcasts(pod))
    }, [keyword])
    console.log('podcasts', podcasts);
    return podcasts;
}