import React, {useEffect, useState} from 'react'
import ListOfPodcast from '../../components/ListOfPodcast';
import SearchFilter from '../../components/SearchFilter'
import getPodcastList from '../../services/getPodcastList'

export default function Home() {
  const [podcasts, setPodcasts] = useState([]);

    //Dentro del useEffect añadiriamos el fetch.
    useEffect(function () {
        getPodcastList()
       .then(podcasts =>
        setPodcasts(podcasts)
        );
      //setGifs(DIFFGIFS)
    }, [])
    return (
        <>
        {
          <section className="App-header">
            <h1>Podcaster</h1>
            <div className='search-filter'>
              <SearchFilter /> 
            </div>
            <div className='Podcasts'>
              <ListOfPodcast  
                podcasts={podcasts}
              />
            </div>
          </section>
          }
        </>
      );
}