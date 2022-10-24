import { Button, ButtonProps, Container, Divider, Grid, SvgIcon, } from '@mui/material';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { DefaultLoginForm } from './components/DefaultLoginForm';
import { ReactComponent as GoogleIcon } from './../../common/assets/svgs/google-icon.svg';


const FacebookSignInButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: '#4267B2',
  display: 'flex',
  color: 'white',
  '&:hover': {
    backgroundColor: '#4267B2',
  }
}));

const GoogleSignInButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: '#fffff',
  borderColor: 'lightgray',
}));

const LoginContainerStyles = {
  background: 'rgba( 255, 255, 255, 0.3 )',
  boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
  backdropFilter: 'blur( 1.5px )',
  borderRadius: '10px',
  border: '1px solid rgba( 255, 255, 255, 0.18 )',
};

export const Login = () => {
  const { t } = useTranslation();

  const signInWithGoogle = () => {
    console.log('Google provider');
  };

  const signInWithFacebook = () => {
    console.log('Facebook provider');
  };

  const signInWithEmailOrUsername = () => {
    console.log('Email/username provider');
  };

  return (
    <Container className="Login" maxWidth="xs" sx={LoginContainerStyles}>
      <Grid container padding={5} direction="column" justifyContent="center" alignItems="space-between" rowSpacing={2}>

        <Grid item className="social-media__container" xs={12} >
          <Grid container direction="column" justifyContent="center" alignItems="stretch" rowSpacing={2}>
            <Grid item xs={6}>
              <FacebookSignInButton className="facebook-signIn__button" variant="rounded" startIcon={<FacebookIcon/>} onClick={signInWithFacebook}>
                {t('SIGN_BUTTON_FACEBOOK')}
              </FacebookSignInButton>
            </Grid>
            <Grid item xs={12}>
              <GoogleSignInButton className="google-signIn__button" variant="rounded" 
                  startIcon={<SvgIcon component={GoogleIcon} inheritViewBox />} onClick={signInWithGoogle}>
                {t('SIGN_BUTTON_GOOGLE')}
              </GoogleSignInButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className="siginIn__break" xs={12}>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={4}>
              <Divider />
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
              OR
            </Grid>
            <Grid item xs={4}>
              <Divider/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className="defaultLogin__container" xs={12}>
          <DefaultLoginForm  onSignInClick={signInWithEmailOrUsername}/>
        </Grid>

      </Grid>

    </Container>
  )
};

