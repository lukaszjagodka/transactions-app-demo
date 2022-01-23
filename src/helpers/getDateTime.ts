import { lightFormat, formatISO9075 } from 'date-fns';

export const getDateTime = () => {
  const date = lightFormat(new Date(), 'dd-MM-yyyy');
  const time = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' });
  const dateTime = `${date} ${time}`;
  return dateTime;
};
