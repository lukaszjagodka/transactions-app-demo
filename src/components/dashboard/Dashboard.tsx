import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import TransactionTable from '../transactions/TransactionsTable';
import ChangeCurrencies from '../ChangeCurrencies';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type TState = {
  id: string,
  accountNumber: number,
  accountValue: number,
  currency: string,
}

class Dashboard extends Component <{}, TState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: '',
      accountNumber: 0,
      accountValue: 0,
      currency: '',
    };
  }

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    const retObj: string | null = localStorage.getItem('selectedAccount');
    if (retObj !== null) {
      const selectedAccountObj = JSON.parse(retObj);
      const {
        id, accountNumber, accountValue, currency,
      } = selectedAccountObj;
      this.setState({
        id,
        accountNumber,
        accountValue,
        currency,
      });
    }
  };

  render() {
    const {
      id, accountNumber, accountValue, currency,
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
                  <div className="accountNumberDashboard" style={{ marginLeft: '15px', display: 'flex', fontWeight: 'bold' }}>
                    Account number:
                    {' '}
                    {accountNumber}
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <div className="accountValueDashboard" style={{ color: 'black', right: '5px', fontWeight: 'bold' }}>
                  {accountValue}
                  {' '}
                  {currency}
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
                <ChangeCurrencies />
                <Divider />
              </Item>
            </Grid>

          </Grid>
        </Box>
      </div>
    );
  }
}

export default Dashboard;