import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export function transformDateToCustomFormat(date: Date) {
  return format(date, 'dd/MMM/YYY HH:mm', { locale: ru });
}
