
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";


function CustomSelector({ title, selected, values, onChange }) {  

  return (
    <FormControl>
    <InputLabel id={`id${title}label`}>{ title }</InputLabel>
    
    <Select
      labelId={`id${title}label`}
      id={`id${title}select`}
      value={selected}
      onChange={onChange}
      style={{ width: 100 }}
       
    >
      {
        values.map(({value, label}) => (
            <MenuItem value={value} key={label}>{ label }</MenuItem>
        ))
      }
    </Select>
  </FormControl>
  );
}

export default CustomSelector;
