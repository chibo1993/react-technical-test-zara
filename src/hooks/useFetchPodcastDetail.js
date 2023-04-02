import {useEffect, useState} from 'react'
import { getPodcastDetailsList } from '../store/podcast/slice';
import { useSelector } from 'react-redux'


export default function useFetchPodcastDetail() {
    const [podcastsDetails, setPodcastsDetails] = useState([])
    const dataDetailPodcast = useSelector(getPodcastDetailsList)
    useEffect(function () {
        setPodcastsDetails(dataDetailPodcast)
    }, [dataDetailPodcast])
    return podcastsDetails;
}