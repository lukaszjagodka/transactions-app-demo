import { format } from 'date-fns';

export const getFormattedDate = (date = new Date(), dateFormat = 'dd-MM-yyyy HH:mm') => format(new Date(date), dateFormat);
