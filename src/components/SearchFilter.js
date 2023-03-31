import React from 'react'
import PropTypes from "prop-types";

const Searcher = ({onSearcher}) => {
    const inputSearcherHandler = (e) => {
        console.log(e.target.value)
        onSearcher(e.target.value)
    }
    return (
    <>
         <input id="SearchPodcasts" type="text" onChange={inputSearcherHandler} size={35} height={20} placeholder="Filter podcasts..."/>
    </>
    );
}
Searcher.prototype = {
    onSearcher: PropTypes.func.isRequired
}
export default Searcher
