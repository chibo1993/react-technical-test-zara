import React, {useEffect, useState} from 'react'
import ListOfPodcast from '../../components/ListOfPodcast';
import SearchFilter from '../../components/SearchFilter'
import getPodcastList from '../../services/getPodcastList'
import SearchChip from '../../components/SearchChip'

export default function Home() {
  const [podcasts, setPodcasts] = useState([])
  const [keyword, setKeyword] = useState('')
  console.log(document.getElementById('SearchPodcasts'));

  const onSearcherhandlerChange = evt => {   
    console.log('evt', evt)
    setKeyword(evt);
  }
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
              <div className='header__searcher__container'>
               <SearchChip 
                numberOfPodcast={podcasts.length}
               />
                <SearchFilter 
                  keyword={keyword}
                  onSearcher={onSearcherhandlerChange}  
                /> 
              </div>
            <div className='Podcasts__container'>
              <ListOfPodcast  
                podcasts={podcasts}
              />
            </div>
          </section>
          }
        </>
      );
}