import {useEffect, useState} from 'react'
import Podcasts from '../components/Podcast';
import getPodcastList from '../services/getPodcastList';

export default function useFetchPodcastList({keyword} = {keyword: ''}) {
    const [podcasts, setPodcasts] = useState([])
    useEffect(function () {
        getPodcastList()
        .then(pod =>
          keyword === '' ? setPodcasts(pod) : 
          setPodcasts(pod.filter(pod => pod.title.includes(keyword.toUpperCase())))
        );
    }, [keyword])
    console.log('hola', Podcasts);
    return podcasts;
}