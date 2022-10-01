import React from 'react'
import './Settings.scss';
import { SettingsDialog } from './SettingsDialog';
import { togglePopupOpened } from '../../store/ducks/settingsSlice';
import { useAppDispatch } from '../../store/hooks';

import { IconButton, } from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

export const Settings = () => {
    const dispatch = useAppDispatch();

    const handleSupport = () => {
     console.log('');
    };

    return (
        <div className="Settings">
            <IconButton color="primary" size="large" aria-label="settings" onClick={() => dispatch(togglePopupOpened())}>
                <SettingsRoundedIcon />
            </IconButton>
            <IconButton color="primary" size="large" aria-label="support" onClick={() => handleSupport()}>
                <HelpRoundedIcon />
            </IconButton>
            <SettingsDialog />
        </div>
    )
};

