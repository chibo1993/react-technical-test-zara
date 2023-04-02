import {useEffect, useState} from 'react'
import { getPodcastEpisodesList} from '../store/podcast/slice';
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"

export default function useFilterPodcastEpisode() {
    const {episodeId} = useParams()
    const [dataEpisodePodcast, setDataEpisodePodcast] = useState([])
    const dataDetailPodcast = useSelector(getPodcastEpisodesList)
    useEffect(function () {
        setDataEpisodePodcast(dataDetailPodcast.filter(podcast => `${podcast.trackId}` === episodeId))
    }, [dataDetailPodcast, episodeId])
    return dataEpisodePodcast;
}

//trackId