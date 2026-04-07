import {GoSearch} from 'react-icons/go'

const Searchbar = ()=>{
    return(
        
        <div className='search-wrapper'>
        <form className='search-form'>
            <input className='search-input' type='text' placeholder="Search the web without being tracked"/>
            <button className='search-button' type='button'>
                <GoSearch size={'20px'} style={{alignSelf:'center'}}/>
            </button>
        </form>
            
        </div>
        
    )
}

export {Searchbar}