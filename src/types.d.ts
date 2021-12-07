export interface IAccount {
  id: string,
  accNumber: number,
  accValue: number
}

export interface IState {
  accounts: {
    accounts: Array<IAccount>,
    selectedAccount: IAccount
  }
}
