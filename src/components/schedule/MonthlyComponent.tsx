'use client';
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';

import React from 'react'

export const MonthlyComponent = () => {
  return (
    <div>
      <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              right: 'prev,today,next',
              center: 'title',
              left: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            locales={[koLocale]}
            height="100%"
            dayMaxEvents={true}
            events={[]}
            weekends={false}
            slotMinTime="09:00"
            slotMaxTime="18:00"
            slotDuration="01:00:00" // 1시간 단위로 칸 생성
            slotLabelInterval="01:00"
            contentHeight="auto" 
        />
    </div>
  )
}

export default MonthlyComponent;