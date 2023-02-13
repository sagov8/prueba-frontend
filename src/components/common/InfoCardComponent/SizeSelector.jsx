import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

const sizes = [
  'Small',
  'Medium',
  'Large',
  'Extra Large'
]

export default function SizeSelect() {
  const [value, setValue] = useState(sizes[0]);

  return (
    
    <Autocomplete
      disablePortal
      id="combo-box-sizes"
      value={value}
      onChange={(event, newValue) => {
          setValue(newValue);
      }}
      options={sizes}
      sx={{ width: 300 }}
      size={'small'}
      renderInput={(params) => <TextField {...params} placeholder='Please select' />}
    />
  );
}
