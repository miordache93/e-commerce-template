import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { setBrandFilter } from '../../../store/ducks/filtersSlice';
import { useAppDispatch } from '../../../store/hooks';
import { catalogFilterByBrandSelector } from '../../../store/selectors/filters.selector';

const brands = [
  'Brand 1',
  'Brand 2',
  'Brand 3',
];

const Filters = () => {
  const selectedBrands = useSelector(catalogFilterByBrandSelector);
  const dispatch = useAppDispatch();


  const handleBrandChange = (event: any): void => {
    const {
      target: { value },
    } = event;
    dispatch(setBrandFilter(value));
  };

  return (
    <div className="Filters">
      <FormControl
        sx={{ m: 1, width: 300 }}>
        <InputLabel
          id="brand-filter-label">Name</InputLabel>
        <Select
          labelId="brand-filter-label"
          id="brand-filter-name"
          multiple
          value={selectedBrands}
          onChange={handleBrandChange}
          input={<OutlinedInput label="Name" />}
        >
          {brands.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Filters;
