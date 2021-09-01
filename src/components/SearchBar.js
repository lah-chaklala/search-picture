
import { TextField } from '@material-ui/core';

function SearchBar({ name, ...resProp }) {  
  return (
    <TextField id={name} label={name} {...resProp}/>
  );
}

export default SearchBar;
