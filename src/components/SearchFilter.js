import React, {useEffect, useState} from 'react'
import getPodcastList from '../services/getPodcastList'


export default function SearchFilter () {

    return <>
         <input id="SearchPodcasts" type="text" size={35} height={20} placeholder="Filter podcasts..."/>
    </>

}
