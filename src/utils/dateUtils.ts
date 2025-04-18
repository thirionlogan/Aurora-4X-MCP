interface AuroraDateTime {
  raw: {
    gameTime: number;
    startYear: number;
  };
  calculated: {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  formatted: string;
}

export function convertAuroraDateTime(
  gameTime: number,
  startYear: number
): AuroraDateTime {
  // Constants for time calculations
  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const daysInMonth = 30;
  const monthsInYear = 12;
  const secondsInYear = daysInMonth * monthsInYear * secondsInDay;

  // Calculate all time components
  const totalYears = Math.floor(gameTime / secondsInYear);
  const remainingAfterYears = gameTime % secondsInYear;

  const totalMonths = Math.floor(
    remainingAfterYears / (secondsInDay * daysInMonth)
  );
  const remainingAfterMonths =
    remainingAfterYears % (secondsInDay * daysInMonth);

  const totalDays = Math.floor(remainingAfterMonths / secondsInDay);
  const remainingAfterDays = remainingAfterMonths % secondsInDay;

  const hours = Math.floor(remainingAfterDays / secondsInHour);
  const remainingAfterHours = remainingAfterDays % secondsInHour;

  const minutes = Math.floor(remainingAfterHours / secondsInMinute);
  const seconds = remainingAfterHours % secondsInMinute;

  const year = startYear + totalYears;
  const month = totalMonths + 1; // 1-based months
  const day = totalDays + 1; // 1-based days

  return {
    raw: {
      gameTime,
      startYear,
    },
    calculated: {
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
    },
    formatted: `Year ${year}, Month ${month}, Day ${day} - ${String(
      hours
    ).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`,
  };
}
