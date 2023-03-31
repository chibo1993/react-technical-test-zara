import React, {useEffect, useState} from 'react'
import getPodcastList from '../services/getPodcastList';

export default function useFetchPodcastList() {

    const [podcasts, setPodcasts] = useState([])

    useEffect(function () {
        getPodcastList()
       .then(podcasts =>
        setPodcasts(podcasts)
        );
      //setGifs(DIFFGIFS)
    }, [])
    
    return podcasts;
}