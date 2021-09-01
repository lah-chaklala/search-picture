
import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

function SearchContainer() {  
  
  const [termSearch, setTermSearch] = useState('');
  const [images, setImages] = useState([]);
  
  function searchTermHandler(newTerm) {
    console.log(newTerm);
    setTermSearch(newTerm);
    
  }

  return (
    <Container>
        <SearchBar name='Search term' value={termSearch} onChange={(event) => searchTermHandler(event.target.value)} fullWidth />
        <ImageList images={images}/>
    </Container>
  );
}

export default SearchContainer;
