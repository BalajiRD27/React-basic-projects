import React from 'react'

const Search = ({search,setSearch,handleSearch}) => {
  return (
    <div className='search'>
        <input 
        className='citysearch' 
        type="text"
        name='search'
        placeholder='enter city name'
        value={search} 
        onChange={event=>setSearch(event.target.value)}/>
        <button className='btnsearch' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search