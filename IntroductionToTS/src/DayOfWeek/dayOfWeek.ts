function showDayOfWeekNum(day: string): number | Error {
  enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  const dayOfWeekNum = DaysOfWeek[day as keyof typeof DaysOfWeek];
  if (!dayOfWeekNum) throw new Error("error");
  return DaysOfWeek[day as keyof typeof DaysOfWeek];
}

function initShowDayOfWeekNum() {
  try {
    console.log(showDayOfWeekNum("Monday")); // 1
    console.log(showDayOfWeekNum("Tuesday")); // 2
    console.log(showDayOfWeekNum("Invalid")); // error
  } catch (error: unknown) {
    if (error instanceof Error) {
      const { message } = error;
      console.error(message);
      return;
    }
    console.error(error);
  }
}

initShowDayOfWeekNum();
