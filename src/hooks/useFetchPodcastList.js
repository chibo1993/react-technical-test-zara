import {useEffect, useState} from 'react'
import { getPodcastList } from '../store/podcast/slice';
import { useSelector } from 'react-redux'

export default function useFetchPodcastList({keyword} = {keyword: ''}) {
    const [podcasts, setPodcasts] = useState([])
    const dataPodcast = useSelector(getPodcastList)
    useEffect(function () {
          keyword === '' ? setPodcasts(dataPodcast) : 
          setPodcasts(dataPodcast.filter(pod => pod.title.includes(keyword.toUpperCase())))
    }, [keyword, dataPodcast])
    return podcasts;
}