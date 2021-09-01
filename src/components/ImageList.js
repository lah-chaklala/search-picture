
import { TextField } from '@material-ui/core';

function ImageList({ name, ...resProp }) {  
  return (
    <TextField id={name} label={name} {...resProp}/>
  );
}

export default ImageList;
