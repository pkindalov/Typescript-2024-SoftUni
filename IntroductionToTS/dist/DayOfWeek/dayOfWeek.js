"use strict";
function showDayOfWeekNum(day) {
    let DaysOfWeek;
    (function (DaysOfWeek) {
        DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
        DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
        DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
        DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
        DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
        DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
        DaysOfWeek[DaysOfWeek["Sunday"] = 7] = "Sunday";
    })(DaysOfWeek || (DaysOfWeek = {}));
    const dayOfWeekNum = DaysOfWeek[day];
    if (!dayOfWeekNum)
        throw new Error("error");
    return DaysOfWeek[day];
}
function initShowDayOfWeekNum() {
    try {
        console.log(showDayOfWeekNum("Monday")); // 1
        console.log(showDayOfWeekNum("Tuesday")); // 2
        console.log(showDayOfWeekNum("Invalid")); // error
    }
    catch (error) {
        if (error instanceof Error) {
            const { message } = error;
            console.error(message);
            return;
        }
        console.error(error);
    }
}
initShowDayOfWeekNum();
//# sourceMappingURL=dayOfWeek.js.map