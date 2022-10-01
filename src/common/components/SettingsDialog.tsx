import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import ThemeModeSwitch from './ThemeModeSwitch';
import ThemeTypeSwitch from './ThemeTypeSwitch';
import LanguageSwitch from './LanguageSwitch';
import { useSelector } from 'react-redux';
import { settingsPopupOpenedSelector } from '../../store/selectors/settings.selector';
import { useAppDispatch } from '../../store/hooks';
import { togglePopupOpened } from '../../store/ducks/settingsSlice';

export const SettingsDialog = () => {
    const dispatch = useAppDispatch();
    const open: boolean = useSelector(settingsPopupOpenedSelector) || false;

    const handleClose = () => {
        dispatch(togglePopupOpened());
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Settings
            </DialogTitle>
            <DialogContent>
                <ThemeModeSwitch />
                <ThemeTypeSwitch />
                <LanguageSwitch />
            </DialogContent>
        </Dialog>
    );
}


