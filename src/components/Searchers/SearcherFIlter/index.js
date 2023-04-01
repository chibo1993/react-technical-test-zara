import React from 'react'
import PropTypes from "prop-types";

const Searcher = ({onSearcher}) => {
    const inputSearcherHandler = (e) => {
        onSearcher(e.target.value)
    }
    return (
         <input className="SearchPodcasts" type="text" onChange={inputSearcherHandler} size={35} height={20} placeholder="Filter podcasts..."/>
    );
}
Searcher.prototype = {
    onSearcher: PropTypes.func.isRequired
}
export default Searcher
