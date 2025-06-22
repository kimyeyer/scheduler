import { FormButtonGroup, ItemText, ItemTextarea, ItemTime } from '@/components/common/FormItems'
import React from 'react'


const ScheduleModal = () => {
  
  return (
    <form className="space-y-4">
      <div className="space-y-4">
        <ItemText label="제목" placeholder="제목을 입력하세요." />
        <ItemTextarea label="설명" placeholder="설명을 입력하세요." />
        <ItemText label="장소" placeholder="장소를 입력하세요." /> {/* 장소 검색 기능 들어가면 좋을 것 같음 */}
        <ItemTime mode="range" />
      </div>

      <div className="flex justify-end gap-3 mt-8">
        <FormButtonGroup 
          buttons={[
            {label: '취소', onClick: () => {}, type: 'default'},
            {label: '저장', onClick: () => {}, type: 'primary'},
          ]} 
        />
      </div>
    </form>
  )
}

export default ScheduleModal

