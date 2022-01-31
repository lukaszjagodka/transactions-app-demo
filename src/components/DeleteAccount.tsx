/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { setTimeout } from 'timers';
import { removeAccount } from './accounts/accountsSlice';
import { logOut } from '../helpers/logout';

type TProps = {
  removeAccount: any
}

type TState = {
  disableButton: boolean,
  disableDeleteOption: boolean,
  accountToDelete: string,
  accuntMatches: number,
  open: boolean,
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

class DeleteAccount extends Component <TProps, TState> {
  constructor(props: any) {
    super(props);
    this.state = {
      disableDeleteOption: false,
      disableButton: true,
      accountToDelete: '',
      accuntMatches: 0,
      open: false,
    };
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { accountToDelete } = this.state;
    this.setState({
      accountToDelete: e.target.value,
    });
    if (accountToDelete.length >= 2) {
      this.setState({
        disableButton: false,
      });
    } else {
      this.setState({
        disableButton: true,
      });
    }
  }

  deleteAccountBtn = () => {
    const { accountToDelete } = this.state;
    const { removeAccount } = this.props;
    const selectedAccount: string | null = localStorage.getItem('selectedAccount');
    if (selectedAccount) {
      const objSelectedAccount = JSON.parse(selectedAccount);
      const { id } = objSelectedAccount;
      if (id.toLowerCase() === accountToDelete.toLowerCase()) {
        this.setState({
          open: true,
          accuntMatches: 1,
        });
        removeAccount(id);
        setTimeout(() => logOut(), 3000);
      } else {
        this.setState({
          open: true,
          accuntMatches: 2,
        });
      }
    }
  }

  cancelDeleteBtn = () => {
    this.setState({
      disableDeleteOption: false,
    });
  }

  disableDeleteOption = () => {
    this.setState({
      disableDeleteOption: true,
      disableButton: true,
    });
  };

  handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      open: false,
    });
  };

  render() {
    const {
      disableButton, disableDeleteOption, open, accuntMatches,
    } = this.state;
    return (
      <div>
        {
          (accuntMatches === 1) ? (
            <Snackbar open={open} autoHideDuration={5000} onClose={this.handleCloseSnackbar}>
              <Alert onClose={this.handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                Correct deleted!
              </Alert>
            </Snackbar>
          ) : (
            <Snackbar open={open} autoHideDuration={5000} onClose={this.handleCloseSnackbar}>
              <Alert onClose={this.handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
                Account name dont match!
              </Alert>
            </Snackbar>
          )
        }
        {disableDeleteOption
          ? (
            <div>
              <Container>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="Enter name account"
                    variant="standard"
                    onChange={this.handleNameChange}
                  />
                  <Button style={{ top: '15px', height: '40px', left: '20px' }} color="error" variant="contained" disabled={disableButton} onClick={this.deleteAccountBtn}>
                    Delete account
                  </Button>
                  <Button style={{ top: '15px', height: '40px', left: '40px' }} color="warning" variant="contained" onClick={this.cancelDeleteBtn}>
                    Cancel
                  </Button>
                </Box>
              </Container>
            </div>
          )
          : <Button onClick={this.disableDeleteOption} variant="contained" style={{ top: '15px', height: '40px' }}>click</Button>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  removeAccount: (id: string) => dispatch(removeAccount(id)),
});

function mapStateToProps() {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
