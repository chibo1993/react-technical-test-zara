import React, {useState} from 'react'
import ListOfPodcast from '../../components/Podcast/ListPodcast/index';
import SearchFilter from '../../components/Searchers/SearcherFIlter'
import SearchChip from '../../components/Searchers/SearcherChip'
import Header from '../../components/Header/index';


export default function Home() {
  const [keyword, setKeyword] = useState('')
  const onSearcherhandlerChange = evt => {   
    setKeyword(evt);
  }
    return (
      <>
          <section className="App-header">
            <Header />
              <div className='header__searcher__container'>
               <SearchChip 
                numberOfPodcast={100}
               />
                <SearchFilter 
                  keyword={keyword}
                  onSearcher={onSearcherhandlerChange}  
                /> 
              </div>
            <div className='Podcasts__container'>
                <ListOfPodcast  
                  keyword={keyword}
                />
            </div>
          </section>
      </>
      );
}