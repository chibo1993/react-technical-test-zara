import React, {useEffect, useState} from 'react'
import ListOfPodcast from '../../components/ListOfPodcast';
import { Provider } from 'react-redux'
import SearchFilter from '../../components/SearchFilter'
import SearchChip from '../../components/SearchChip'
import useFetchPodcastList from '../../hooks/useFetchPodcastList';
import store from '../../store'

export default function Home() {
  const [keyword, setKeyword] = useState('')
    
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
                numberOfPodcast={5}
               />
                <SearchFilter 
                  keyword={keyword}
                  onSearcher={onSearcherhandlerChange}  
                /> 
              </div>
            <div className='Podcasts__container'>
              <ListOfPodcast  
                keyword={keyword}
                onGetPodcastLength={5}
              />
            </div>
          </section>
        </Provider>
      );
}