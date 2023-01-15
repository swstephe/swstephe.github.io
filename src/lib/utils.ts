export const formatYears = (date1: string, date2: string): string => {
  if (date2) {
    if (date1 === date2) {
      return date1.toString();
    } else {
      return `${date1}-${date2}`;
    }
  } else {
    return `${date1}-Present`;
  }
}
