
import { format } from 'date-fns';

export function formatDate({strDate, formatDate}) {
    const dateObj = new Date(strDate);
    const formattedDate = format(dateObj, formatDate);

    return formattedDate;
}