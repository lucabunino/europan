export function formatDate(date1, date2) {
  if (!date1) return '';

  const parseDate = (date) => new Date(date);
  const formatDatePart = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return { day, month, year };
  };

  const d1 = parseDate(date1);
  const d2 = date2 ? parseDate(date2) : null;

  const { day: day1, month: month1, year: year1 } = formatDatePart(d1);
  if (!d2) {
    return `${day1}.${month1}.${year1}`;
  }

  const { day: day2, month: month2, year: year2 } = formatDatePart(d2);
  if (year1 === year2 && month1 === month2) {
    return `${day1}-${day2}.${month1}.${year1}`;
  }
  return `${day1}.${month1}.${year1}-${day2}.${month2}.${year2}`;
}


export function formatTime(time1, time2) {
  // Parse the input times
  let t1 = time1 ? new Date(time1) : null;
  let t2 = time2 ? new Date(time2) : null;
  
  // Helper function to format time as HH:mm
  const formatHHMM = (date) => {
    if (!date) return '';
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Format the times
  const formattedTime1 = formatHHMM(t1);
  const formattedTime2 = formatHHMM(t2);

  // Return the formatted string based on the presence of times
  if (formattedTime1 && formattedTime2) {
    return `${formattedTime1}-${formattedTime2}`;
  } else {
    return `${formattedTime1}`;
  }
}

export function formatTimeStrings(time1, time2) {  
  if (time1 && time2) {
    return `${time1}-${time2}`;
  } else if (time1) {
    return `${time1}`;
  } {
    return ``;
  }
}