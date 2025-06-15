import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, differenceInDays } from "date-fns";

export const getMonthArray = (date: Date) => {
  const start = startOfWeek(startOfMonth(date), { weekStartsOn: 1 });
  const end = endOfWeek(endOfMonth(date), { weekStartsOn: 1});

  const monthArray: Date[][] = [];
  let current = start;
    console.log(current,end);
    const totalDays = differenceInDays(end, start);

    for (let i = 0; i < totalDays; i += 7) {
        const week: Date[] = [];
        for (let j = 0; j < 7; j++) {
        week.push(addDays(start, i + j));
        }
        monthArray.push(week);
    }
    return monthArray; 
};
