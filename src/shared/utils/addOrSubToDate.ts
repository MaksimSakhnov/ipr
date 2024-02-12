import { add, sub } from 'date-fns';
import { transformDateToCustomFormat } from './transformDateToCustomFormat';

export function addOrSubToDate(
  date1: Date,
  numOfDays: number,
  type: 'add' | 'sub',
) {
  if (type === 'add') {
    return transformDateToCustomFormat(add(date1, { days: numOfDays }));
  } else {
    return transformDateToCustomFormat(sub(date1, { days: numOfDays }));
  }
}
