import React, { useState } from 'react';
import { searchPicturesByTerm } from '../api/Pictures';


function ImageListContainer() {  
  
    const [termSearch, setTermSearch] = useState('');
  
    function searchTermHandler(newTerm) {
      console.log('term ', newTerm);
      setTermSearch(newTerm);
    }
  
    return (
      <Container>
      </Container>
    );
  }
  
  export default ImageListContainer;