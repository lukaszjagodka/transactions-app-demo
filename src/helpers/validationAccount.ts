/* eslint-disable import/prefer-default-export */
export const matchExpression = (str: any) => {
  const rgularExp = {
    onlyNumbers: /^[0-9]+$/,
  };
  return rgularExp.onlyNumbers.test(str);
};
