export const generateAccountNumber = () => (Math.floor(Math.random() * 10 ** 15) + 10000);

export const generateAccountName = () => {
  const prefix = 'Demo-account-';
  return `${prefix}${Math.random().toString(36).substr(1, 8)}`;
};
