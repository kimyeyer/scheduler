'use client'
import React, { useMemo, useState } from 'react'
import { getMonthArray, getWeekArray } from './calendarFunc';
import { format, isToday, isSameDay } from 'date-fns';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

export const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
    const weekDays = ['월', '화', '수', '목', '금', '토', '일'];
    const memoedWeekDates= useMemo(() => getWeekArray(selectedDate).map(day => format(day, 'yy-MM-dd')), [selectedDate]);
    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
    };
    console.log(memoedWeekDates);
    // zzzzzz
    return (
        <div className='w-full h-full bg-white'>
            {/* 캘린더 영역 */}
            {viewMode === 'month' ? (
                <MonthView 
                    selectedDate={selectedDate} 
                    handleDateClick={handleDateClick}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                    memoedWeekDates={memoedWeekDates}
                />
            ) : (
                <WeekView 
                    selectedDate={selectedDate} 
                    handleDateClick={handleDateClick}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                    memoedWeekDates={memoedWeekDates}
                />
            )}
        </div>
    );
}
interface ViewProps {
    selectedDate: Date;
    handleDateClick: (date: Date) => void;
    viewMode: 'month' | 'week';
    setViewMode: (mode: 'month' | 'week') => void;
    memoedWeekDates: string[];
}
const MonthView = ({selectedDate, handleDateClick, viewMode, setViewMode, memoedWeekDates}: ViewProps) => {
    const memoedMonthArray = useMemo(() => getMonthArray(selectedDate), [selectedDate]);
    const weekDays = ['월', '화', '수', '목', '금', '토', '일'];
    
    return (
        <>
            {/* 헤더 */}
            <div className='flex justify-between items-center w-full h-12 px-4 shadow-gray-200 shadow-sm'>
                <div className='flex items-center'>
                    <div className='flex bg-gray-100 rounded-lg p-1'>
                        <button 
                            onClick={() => {setViewMode('month')}}
                            className={`
                                px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
                                ${viewMode === 'month' 
                                    ? 'bg-white text-gray-900 shadow-sm' 
                                    : 'text-gray-600 hover:text-gray-900'
                                }
                            `}
                        >
                            월간
                        </button>
                        <button 
                            onClick={() => {setViewMode('week')}}
                            className={`
                                px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
                                ${viewMode === 'week' 
                                    ? 'bg-white text-gray-900 shadow-sm' 
                                    : 'text-gray-600 hover:text-gray-900'
                                }
                            `}
                        >
                            주간
                        </button>
                    </div>
                </div>
                <h4 className='flex-1 text-lg font-semibold text-center'>
                    {format(selectedDate, 'yyyy년 MM월')}
                </h4>
                <div className='flex items-center gap-1'>
                    <button className='w-9 h-9 rounded-md flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:text-gray-900'>
                        <FaAngleLeft />
                    </button>
                    <button className='w-9 h-9 rounded-md flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:text-gray-900'>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
            {/* 요일 영역 */}
            <div className='grid grid-cols-7 border-b border-gray-200'>
                {
                    weekDays.map((day: string, index: number) => (
                        <div 
                            key={index} 
                            className={`p-3 text-center text-sm font-medium ${index === 5 ? 'text-blue-500' : index === 6 ? 'text-red-500' : 'text-gray-700'}`}
                        >
                            {day}
                        </div>
                    ))
                }
            </div>
            {/* 월간 캘린더 영역 */}
            <div className='grid grid-rows-6 h-full'>
                {memoedMonthArray.map((week, weekIndex) => (
                    <div className='grid grid-cols-7 border-b border-gray-100 last:border-b-0' key={weekIndex}>
                        {week.map((day, dayIndex) => {
                            const isCurrentMonth = day.getMonth() === selectedDate.getMonth();
                            const isTodayDate = isToday(day);
                            const isSelected = isSameDay(day, selectedDate);
                            
                            return (
                                <div 
                                    className={`
                                        relative h-20 border-r border-gray-100 last:border-r-0 p-2 cursor-pointer
                                        hover:bg-gray-50 transition-colors duration-200
                                        ${!isCurrentMonth ? 'bg-gray-50' : ''}
                                    `} 
                                    key={dayIndex}
                                    onClick={() => handleDateClick(day)}
                                >
                                    <div className={`
                                        inline-flex items-center justify-center w-8 h-8 rounded-full text-sm
                                        ${isTodayDate ? 
                                            'bg-blue-500 text-white font-medium' : 
                                            isSelected && !isTodayDate ?
                                            'bg-blue-100 text-blue-600 font-medium' :
                                            !isCurrentMonth ? 
                                            'text-gray-400' : 
                                            dayIndex === 0 ? 'text-red-500' :
                                            dayIndex === 6 ? 'text-blue-500' :
                                            'text-gray-900'
                                        }
                                    `}>
                                        {format(day, 'd')}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div> 
        </>
    );
}

const WeekView = ({selectedDate, handleDateClick, viewMode, setViewMode, memoedWeekDates}: ViewProps) => {
    const memoedWeekArray = useMemo(() => getWeekArray(selectedDate), [selectedDate]);
    const weekDays = ['월', '화', '수', '목', '금', '토', '일'];

    const timeArray = useMemo(() => {
        const times = [];
        for (let i = 0; i < 24; i++) {
            times.push(`${i.toString().padStart(2, '0')}:00`);
        }
        return times;
    }, []);

    return (
        <>
            {/* 헤더 */}
            <div className='flex justify-between items-center w-full h-12 px-4 shadow-gray-200 shadow-sm'>
                <div className='flex items-center'>
                    <div className='flex bg-gray-100 rounded-lg p-1'>
                        <button 
                            onClick={() => {setViewMode('month')}}
                            className={`
                                px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
                                ${viewMode === 'month' 
                                    ? 'bg-white text-gray-900 shadow-sm' 
                                    : 'text-gray-600 hover:text-gray-900'
                                }
                            `}
                        >
                            월간
                        </button>
                        <button 
                            onClick={() => {setViewMode('week')}}
                            className={`
                                px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
                                ${viewMode === 'week' 
                                    ? 'bg-white text-gray-900 shadow-sm' 
                                    : 'text-gray-600 hover:text-gray-900'
                                }
                            `}
                        >
                            주간
                        </button>
                    </div>
                </div>
                <h4 className='flex-1 text-lg font-semibold text-center'>
                    {`${memoedWeekDates[0]} - ${memoedWeekDates[6]}`}
                </h4>
                <div className='flex items-center gap-1'>
                    <button className='w-9 h-9 rounded-md flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:text-gray-900'>
                        <FaAngleLeft />
                    </button>
                    <button className='w-9 h-9 rounded-md flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:text-gray-900'>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
            
            {/* 주간 캘린더 영역 */}
            <div className="flex h-full">
                <div className="w-16 border-r border-gray-200">
                    <div className="h-12 border-b border-gray-200"></div>
                    {timeArray.map((time, index) => (
                        <div 
                            key={index} 
                            className="h-12 border-b border-gray-100 text-xs text-gray-500 flex items-center justify-center"
                        >
                            {time}
                        </div>
                    ))}
                </div>
                
                <div className="flex-1 grid grid-cols-7">
                    {memoedWeekArray.map((day, dayIndex) => (
                        <div key={dayIndex} className="border-r border-gray-200 last:border-r-0">
                            <div className="h-12 border-b border-gray-200 flex items-center justify-center">
                                <div className={`
                                    inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
                                    ${isToday(day) ? 
                                        'bg-blue-500 text-white' : 
                                        isSameDay(day, selectedDate) ?
                                        'bg-blue-100 text-blue-600' :
                                        dayIndex === 0 ? 'text-red-500' :
                                        dayIndex === 6 ? 'text-blue-500' :
                                        'text-gray-900'
                                    }
                                `}>
                                    {format(day, 'd')}
                                </div>
                            </div>
                            
                            {timeArray.map((time, timeIndex) => (
                                <div 
                                    key={timeIndex} 
                                    className="h-12 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                                    onClick={() => {
                                        const [hours] = time.split(':').map(Number);
                                        const clickedDate = new Date(day);
                                        clickedDate.setHours(hours, 0, 0, 0);
                                        handleDateClick(clickedDate);
                                    }}
                                >
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
