import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getCategories } from '../../../store/ducks/categoriesSlice';
import { useAppDispatch } from '../../../store/hooks';
import { getCategoriesSelector } from '../../../store/selectors/categories.selector';
import Masonry from '@mui/lab/Masonry';

import './Categories.scss';
import { Label } from '@mui/icons-material';

export const Categories = () => {
    const { loading, categories, error } = useSelector(getCategoriesSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className="Categories">
            {
                categories.length === 0 ? 'NO DATA' : (
                    <Box sx={{ width: 500, minHeight: 829 }}>
                        <Masonry columns={3} spacing={2}>
                            {categories.map((item, index) => (
                                <div key={index}>
                                    <Label>{item}</Label>
                                    <img
                                        src={`./../../../../static/images/categories/${item.img}?w=162&auto=format`}
                                        // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                        alt={item.name}
                                        loading="lazy"
                                        style={{
                                            borderBottomLeftRadius: 4,
                                            borderBottomRightRadius: 4,
                                            display: 'block',
                                            width: '100%',
                                        }}
                                    />
                                </div>
                            ))}
                        </Masonry>
                    </Box>
                )
            }
        </div>
    )
};