const capCatWithSpace = (string) => {
  return (string.charAt(0).toUpperCase() + string.slice(1))
    .replaceAll('-', ' ')
    .replaceAll('_', ' ');
};

const isoDateTimeToDate = (string) => {
  const date = new Date(string.slice(0, -1));
  return date.toDateString();
};

export { capCatWithSpace, isoDateTimeToDate };
