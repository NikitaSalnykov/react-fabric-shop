import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formattedDate = (originalDate) => {
  const parsedDate = parseISO(originalDate);
  const formattedDate = format(parsedDate, 'dd-MM-yy HH:mm');
  return formattedDate;
};

export const formattedYearMonth = (originalDate) => {
  const parsedDate = parseISO(originalDate);
  const formattedDate = format(parsedDate, 'MM-yyyy', { locale: ru });
  return formattedDate;
};
