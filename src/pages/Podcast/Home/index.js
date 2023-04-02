import React, {useState, useEffect} from 'react'
import ListOfPodcast from '../../../components/Podcast/ListPodcast/index';
import SearchFilter from '../../../components/Searchers/SearcherFIlter'
import SearchChip from '../../../components/Searchers/SearcherChip'
import Header from '../../../components/Header/index';
import useFetchPodcastList from '../../../hooks/useFetchPodcastList';
import { useDispatch } from 'react-redux'
import { fetchPodcastList } from '../../../store/podcast/slice'

export default function Home() {

  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const podcastList = useFetchPodcastList({keyword})
  //;
  const onSearcherhandlerChange = evt => {   
    setKeyword(evt);
  }
  useEffect( () => {
    dispatch(fetchPodcastList())
  }, [dispatch])
    return (
      <>
          <section className="main_content">
            <Header />
              <div className='header__searcher__container'>
               <SearchChip 
                numberOfPodcast={podcastList.length}
               />
                <SearchFilter 
                  keyword={keyword}
                  onSearcher={onSearcherhandlerChange}  
                /> 
              </div>
            <div className='Podcasts__container'>
                <ListOfPodcast
                  podcastList={podcastList}
                />
            </div>
          </section>
      </>
      );
}