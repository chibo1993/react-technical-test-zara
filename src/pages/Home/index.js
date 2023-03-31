import React, {useEffect, useState} from 'react'
import ListOfPodcast from '../../components/Podcast/ListPodcast/index';
import { Provider } from 'react-redux'
import SearchFilter from '../../components/Searchers/SearcherFIlter'
import SearchChip from '../../components/Searchers/SearcherChip'
import useFetchPodcastList from '../../hooks/useFetchPodcastList';
import store from '../../store'

import { Link, Route } from "wouter";

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const dataPodcast = useFetchPodcastList()
  //let dataPodcastList = useFetchPodcastList();
  const onSearcherhandlerChange = evt => {   
    setKeyword(evt);
  }
    return (
      <Provider store={store}>
          <section className="App-header">
            <h1>Podcaster</h1>
              <div className='header__searcher__container'>
               <SearchChip 
                numberOfPodcast={dataPodcast.length}
               />
                <SearchFilter 
                  keyword={keyword}
                  onSearcher={onSearcherhandlerChange}  
                /> 
              </div>
            <div className='Podcasts__container'>
            <Link
            key={5555}
            to={`podcast/${555}`}
          >
                <ListOfPodcast  
                  keyword={keyword}
                />
                </Link>
                
            </div>
          </section>
        </Provider>
      );
}