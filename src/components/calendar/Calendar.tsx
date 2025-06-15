import React, { useMemo, useState } from 'react'
import { getMonthArray } from './calendarFunc';
import { format } from 'date-fns';
export const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const memoedMonthArray = useMemo(() => getMonthArray(selectedDate), [selectedDate]);
    console.log(memoedMonthArray);
  return (
    <div className='w-full h-full'>
        <div className='text-center grid grid-cols-7'>
            {['월','화','수','목','금','토','일'].map((days)=>(
                <div >{days}</div>
            ))}
        </div>
     
        <div className='w-full h-full grid grid-rows-6'>
            {memoedMonthArray.map((week, weekIndex)=>(
                <div className='grid grid-cols-7'>
                    {week.map((day,dayIndex)=> (
                        <div className={`w-2xs`}>
                            {`${format(day,'MM-dd')}(${format(day,'E')})`}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
    
  )
}