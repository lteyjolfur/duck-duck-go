import React from 'react';
import {GoSearch} from 'react-icons/go'

const Searchbar = ({children})=>{
    return(
        
        <div className='search-wrapper'>
        <form className='search-form'>
            <input className='search-input' type='text' placeholder="Search the web without being tracked"/>
            <div className='search-button' type='button'>
                <GoSearch size={'20px'} style={{alignSelf:'center'}}/>
            </div>
        </form>
            
        </div>
        
    )
}

export {Searchbar}