import {useEffect, useState} from 'react'
import getPodcastDetails from '../services/getPodcastDetails';

export default function useFetchPodcastDetail({keyword} = {keyword: ''}) {
    const [podcasts, setPodcasts] = useState([])
    useEffect(function () {
        getPodcastDetails()
        .then(pod =>
            setPodcasts(pod))
    }, [keyword])
    return podcasts;
}