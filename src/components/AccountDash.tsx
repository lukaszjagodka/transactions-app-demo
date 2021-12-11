/* eslint-disable no-console */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable func-names */
import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import TransactionTable from './TransactionsTable';
import ChangeCurrences from './ChangeCurrences';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type TProps = {
  retObj: string
}

type TState = {
  id: string,
  accNumber: number,
  accValue: number,
  curr: string,
}

class AccountDash extends Component <TProps, TState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: '',
      accNumber: 0,
      accValue: 0,
      curr: '',
    };
  }

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    const { retObj } = this.props;
    const selectedAccountObj = JSON.parse(retObj);
    const {
      id, accNumber, accValue, curr,
    } = selectedAccountObj;
    this.setState({
      id,
      accNumber,
      accValue,
      curr,
    });
  };

  render() {
    const {
      id, accNumber, accValue, curr,
    } = this.state;

    return (
      <div>
        <Box sx={{
          flexGrow: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 3,
        }}
        >
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Item>
                <div className="mainDash">
                  <div className="accNumberDash" style={{ marginLeft: '15px', display: 'flex', fontWeight: 'bold' }}>
                    Account number:
                    {' '}
                    {accNumber}
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <div className="accValueDash" style={{ color: 'black', right: '5px', fontWeight: 'bold' }}>
                  {accValue}
                  {' '}
                  {curr}
                </div>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <div style={{ fontSize: '10px', marginLeft: '15px', display: 'flex' }}>
                  <h1>Transactions history</h1>
                </div>
                <TransactionTable />
              </Item>
            </Grid>

            <Grid item xs={4}>
              <Item>
                <ChangeCurrences />
                <Divider />
              </Item>
            </Grid>

          </Grid>
        </Box>
      </div>
    );
  }
}

export default AccountDash;
