import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import CharactersGrid from './components/characters/CharactersGrid'
import Search from './components/Search'
import Top from './components/Top'

function App() {

  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(true)
  const [query,setQuery] = useState('')


useEffect(()=>{
  const fetchItems = async () =>{
      const apiResponse = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      const apiData = await apiResponse.json()
    setItems(apiData)
    setLoading(false)
  }
  fetchItems()
},[query])



  return (
    <div className="App">
    <Top />
     <Header />
     <Search getQuery={(q)=> setQuery(q)} />
     <CharactersGrid loading={loading} items={items}/>
    </div>
  );
}

export default App;
