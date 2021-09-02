
import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import DelayedInputText from './DelayedInputText';
import ImageListContainer from './ImageList';


function SearchContainer() {  
  
  const [termSearch, setTermSearch] = useState('');

  function searchTermHandler(newTerm) {
    console.log('term ', newTerm);
    setTermSearch(newTerm);
  }

  return (
    <Container>
        <DelayedInputText name='Search term' value={termSearch} onChange={searchTermHandler} fullWidth />
        <ImageListContainer searchTerm={termSearch}/>
    </Container>
  );
}

export default SearchContainer;
