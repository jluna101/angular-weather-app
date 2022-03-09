import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import './index.css';



function App() {
  

  const searchOptions = {
    key: 'CjGmQpDnbTOL39hdJY5cjJWYIIeQyb8x',
    limit: 25,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };

  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState(('minions'));
  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
      getImages();
    }, []);

  function getImages() {
    // const searchString = 'minions';
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
  
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
        setLastSearch(searchString);
        setSearchString('');
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchString(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    getImages();
  }



  


  return (
    <div>
      <h1>Giphy Searcher</h1>
      <SearchForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <SearchResults images={images} />
    </div>
  );
}

export default App;
