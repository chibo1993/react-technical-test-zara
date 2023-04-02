import {useEffect, useState} from 'react'
import getPodcastDetails from '../services/getPodcastDetails';
import { useSelector } from 'react-redux'

export default function useFetchPodcastDetail() {
    const [podcasts, setPodcasts] = useState([])
    const useSelector = useSelector()
    console.log('getPodcastDetails', getPodcastDetails())
    useEffect(function () {
        useSelector(getPodcastDetails())
        .then(pod =>
        setPodcasts(pod))
    }, [])
    console.log('hihi', podcasts)
    return podcasts;
}