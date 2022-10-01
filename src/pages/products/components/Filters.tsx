import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { setCategoryFilter } from '../../../store/ducks/filtersSlice';
import { useAppDispatch } from '../../../store/hooks';
import { catalogFilterByCategorySelector } from '../../../store/selectors/filters.selector';

const brands = [
  'Brand 1',
  'Brand 2',
  'Brand 3',
];

const Filters = () => {
  const selectedCategory = useSelector(catalogFilterByCategorySelector);
  const dispatch = useAppDispatch();


  const handleBrandChange = (event: any): void => {
    const {
      target: { value },
    } = event;
    dispatch(setCategoryFilter(value));
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
          value={selectedCategory}
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
