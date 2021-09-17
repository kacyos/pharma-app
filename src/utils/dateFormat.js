export function formatDate(date) {
  const formattedDate = new Date(date).toLocaleDateString();
  return formattedDate;
}
