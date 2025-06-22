import React, { useState } from 'react'
import ScheduleModal from './Modal';
import ListItem from '@/components/common/ListItem';

const ScheduleList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  }
  const handleModalClose = () => {
    setIsModalOpen(false);
  }
  
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row justify-between'>
        <h4 className='text-lg font-bold'>일정</h4>
        <button 
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          onClick={() => setIsModalOpen(true)}
        >
          루틴 추가
        </button>
      </div>
      <div className="space-y-3">
        <ListItem mode='schedule' item={{title: '영화보기', description: '영화를 보자~', range: '10:00-11:00', venue: 'cgv'}}/>
      </div>
    </div>
  )
}

export default ScheduleList;
