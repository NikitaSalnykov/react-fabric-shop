import { format, parseISO } from 'date-fns';

export const formattedDate = (originalDate) => {
  const parsedDate = parseISO(originalDate);
  const formattedDate = format(parsedDate, 'dd-MM-yy HH:mm');
  return formattedDate;
};
