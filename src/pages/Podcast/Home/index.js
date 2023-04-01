import React, {useState} from 'react'
import ListOfPodcast from '../../../components/Podcast/ListPodcast/index';
import SearchFilter from '../../../components/Searchers/SearcherFIlter'
import SearchChip from '../../../components/Searchers/SearcherChip'
import Header from '../../../components/Header/index';
import useFetchPodcastList from '../../../hooks/useFetchPodcastList';


export default function Home() {
  const [keyword, setKeyword] = useState('')
  const podcastList = useFetchPodcastList({keyword});
  const onSearcherhandlerChange = evt => {   
    setKeyword(evt);
  }
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