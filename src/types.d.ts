export interface IAccount {
  id: string,
  accNumber: number,
  accValue: number,
  curr: string
}

export interface IState {
  accounts: {
    accounts: Array<IAccount>,
    selectedAccount: IAccount
  }
}
