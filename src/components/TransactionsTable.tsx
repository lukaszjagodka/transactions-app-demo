/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable no-useless-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useSelector } from 'react-redux';
import { ITransactionsState, TTransaction, IAccountsState } from '../types.d';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

let rows: any[] = [];

function TransactionTable() {
  const transactions = useSelector((state: ITransactionsState) => state.transactions.transactions);
  const selectedAcc = useSelector((state: IAccountsState) => state.accounts.selectedAccount);
  const transactionsLS: string | null = localStorage.getItem('accountsTransactions');

  if (transactionsLS !== null) {
    const transactionsFromLocalStorageParsed = JSON.parse(transactionsLS);
    rows = transactionsFromLocalStorageParsed.filter((x:any) => x.account === selectedAcc.id);
  } else {
    rows = transactions.filter((x:any) => x.account === selectedAcc.id);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Transaction id</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">Account</StyledTableCell>
            <StyledTableCell align="left">Amount</StyledTableCell>
            <StyledTableCell align="left">Currence</StyledTableCell>
            <StyledTableCell align="left">Amount</StyledTableCell>
            <StyledTableCell align="left">Currence</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.date}</StyledTableCell>
              <StyledTableCell align="left">{row.account}</StyledTableCell>
              <StyledTableCell align="right">{row.amountFP}</StyledTableCell>
              <StyledTableCell align="left">{row.currenceFP}</StyledTableCell>
              <StyledTableCell align="right">{row.amountSP}</StyledTableCell>
              <StyledTableCell align="left">{row.currenceSP}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable;
