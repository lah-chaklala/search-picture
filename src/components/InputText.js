
import { TextField } from '@material-ui/core';

function InputText({ name, ...resProp }) {  
  return (
    <TextField id={name} label={name} {...resProp}/>
  );
}

export default InputText;
