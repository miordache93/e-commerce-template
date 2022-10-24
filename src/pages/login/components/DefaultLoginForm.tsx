import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';

interface IState {
    email: string;
    password: string;
    showPassword: boolean;
    rememberMe: boolean;
}

interface IProps {
    onSignInClick: () => void;
}

export const DefaultLoginForm = ({ onSignInClick }: IProps) => {
    const { t } = useTranslation();
    const [formData, setFormData] = React.useState<IState>({
        email: '',
        password: '',
        rememberMe: true,
        showPassword: false,
    });

    const handleChange = (prop: keyof IState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (prop === 'rememberMe') {
            setFormData({ ...formData, [prop]: event.target.checked });
        } else {
            setFormData({ ...formData, [prop]: event.target.value });
        }
    };

    const handleClickShowPassword = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Grid container display={'flex'} direction="column" justifyContent="center" alignItems="center" rowSpacing={3}>
            <Grid item xs={12} sx={{ width: '100%' }}>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="login-form-email">Email</InputLabel>
                    <OutlinedInput
                        id="login-form-email"
                        type={'email'}
                        size="small"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ width: '100%' }}>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="login-form-password">Password</InputLabel>
                    <OutlinedInput
                        id="login-form-password"
                        type={formData.showPassword ? 'text' : 'password'}
                        value={formData.password}
                        size="small"
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ width: '100%' }}>
                <Link
                    component="button"
                    underline="hover"
                    variant="body1"
                    onClick={() => {
                        console.info('Navigate to password recovery page.');
                    }}
                >
                    {t('FORGOT_YOUR_PASSWORD')}
                </Link>
            </Grid>
            <Grid item xs={12} sx={{ width: '100%' }}>
                <Grid container display={'flex'} justifyContent="space-between" alignItems={"flex-start"}>
                    <Grid item xs={8}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.rememberMe}
                                        onChange={handleChange('rememberMe')}
                                    />
                                }
                                label="Remember me" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="submit" variant="contained" color="success" onClick={onSignInClick}>
                            {t('LOGIN_BUTTON')}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};
