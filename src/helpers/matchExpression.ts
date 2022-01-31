export const matchExpression = (str: any) => {
  const regularExp = {
    onlyNumbers: /^[0-9]+$/,
  };
  return regularExp.onlyNumbers.test(str);
};
