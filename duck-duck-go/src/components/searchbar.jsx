import React from 'react';
import {GoSearch} from 'react-icons/go'

const Searchbar = ({children})=>{
    const a123=0
    return(
        
        <div className='search-wrapper'>
        <form className='search-form'>
            <input className='search-input' type='text' placeholder="Search the web without being tracked"/>
            <button className='search-button' type='button'>
                test<GoSearch size={'1.5em'}/>
            </button>
        </form>
            
        </div>
        
    )
}

export {Searchbar}