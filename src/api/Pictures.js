import axios from 'axios';

const url = process.env.REACT_APP_PICTURE_API;
const accessKey = process.env.REACT_APP_PICTURE_ACCESS_KEY;
// const secretKey = process.env.REACT_APP_PICTURE_SECRET_KEY;

const axiosPictures = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Client-ID ${accessKey}`
    }
});

export const searchPicturesByTerm = async (term, page=1, per_page=10) => {
    let results;
    if (term) {
        results = await axiosPictures.get('/search/photos', {
            params: { 
                query: term,
                page: page,
                per_page: per_page,
            }
        });
    } else {
        results = await axiosPictures.get('/photos', {
            params: { 
                page: page,
                per_page: per_page,
            }
        });        
    }

    return results.data;
};