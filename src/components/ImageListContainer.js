import React from 'react';
import CustomPagination from './CustomPagination';
import CustomImageList from './CustomImageList';

import { searchPicturesByTerm } from '../api/Pictures';

function ImageListContainer({ searchTerm }) {  

    const getData = async (page, itemPerPage) => {
        const { numberOfPictures, pictures } = await searchPicturesByTerm(searchTerm, page, itemPerPage);
        return { numberOfItems: numberOfPictures, items: pictures };
    }

    return (
        <CustomPagination getData={getData} renderPage={(items) => <CustomImageList images={items}/>} withSelector={true}/>
    );
  }
  
  export default ImageListContainer;