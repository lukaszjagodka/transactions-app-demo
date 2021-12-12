/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import { withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Profile from './Profile';

const styles = {
  navbar: {
    height: '3rem',
    background: '#45b3e7',
  },
  logo: {
    marginLeft: '2rem',
    marginTop: '0.5rem',
    padding: '0 13px',
    fontSize: '22px',
    display: 'flex',
    fontWeight: 'bold',
    color: 'white',
  },
  profil: {
    display: 'flex',
    right: '2rem',
    marginTop: '0.4rem',
    position: 'absolute',
    fontSize: '18px',
  },
} as const;

type TProps = {
  classes: any,
}

class NavbarTwo extends PureComponent <TProps> {
  render() {
    const { classes } = this.props;
    return (
      <header className={classes.navbar}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
        >
          <div className={classes.logo}>
            transactionApp
          </div>
          <div className={classes.profil}>
            <Profile />
          </div>
        </Typography>
      </header>
    );
  }
}

export default withStyles(styles)(NavbarTwo);
