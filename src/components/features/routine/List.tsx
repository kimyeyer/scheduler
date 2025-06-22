import React, { useState } from 'react'
import RoutineModal from './Modal'
import Modal from '@/components/common/Modal';
import ListItem from '@/components/common/ListItem';

const RoutineList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row justify-between'>
        <h4 className='text-lg font-bold'>루틴</h4>
        <button 
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          onClick={() => setIsModalOpen(true)}
        >
          루틴 추가
        </button>
      </div>
      <div className="space-y-3">
        <ListItem mode='routine' item={{title: '책읽기', description: '독서왕', time: '23:00', duration: '30'}}/>
      </div>
    </div>
  )
}

export default RoutineList;

