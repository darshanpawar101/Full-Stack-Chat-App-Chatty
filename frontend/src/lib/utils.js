export function formatMessageTime(isoDateString) {
  const inputDate = new Date(isoDateString);

  const today = new Date();

  const isToday =
    inputDate.getFullYear() === today.getFullYear() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getDate() === today.getDate();

  const timeString = inputDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (isToday) {
    return timeString;
  } else {
    const isSameYear = inputDate.getFullYear() === today.getFullYear();
    const day = inputDate.getDate();
    const month = inputDate.toLocaleString("default", { month: "short" });

    if (isSameYear) {
      return `${timeString}, ${month} ${day} `;
    } else {
      // Return "Nov, 19, 2024"
      return `${timeString}, ${month} ${day}, ${inputDate.getFullYear()}`;
    }
  }
}
