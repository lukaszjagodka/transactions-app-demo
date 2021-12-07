/* eslint-disable import/prefer-default-export */
import { IState } from '../types.d';

export const newIni: IState = {
  accounts: {
    accounts: [
      { id: 'Demo-account-pzc38tfeo', accNumber: 603975430160344, accValue: 15000 },
      { id: 'Demo-account-m8fpdawbi', accNumber: 152573100742264, accValue: 23000 },
    ],
    selectedAccount: {
      id: '',
      accNumber: 0,
      accValue: 0,
    },
  },
};
