export const calculateWorkDuration = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = endDate === "" ? new Date() : new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0) {
    return `${months}mos`;
  } else if (months === 0) {
    return `${years}yrs`;
  } else {
    return `${years}yrs ${months}mos`;
  }
};
