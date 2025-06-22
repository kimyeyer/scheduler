import React from 'react'
import { AiOutlineEdit as EditIcon } from "react-icons/ai"

const ItemContainer = `bg-white rounded-2xl p-4 border border-gray-200`
const ItemBox = `flex items-start gap-3`

interface ListItemProps {
    mode: 'routine' | 'schedule'
    item: ItemType
}
interface ItemType {
    title: string
    description: string
    time?: string
    duration?: string
    range?: string
    venue?: string
}
const ListItem = ({mode = 'routine' ,item}: ListItemProps) => {
  return (
    <div className={ItemContainer}>
      <div className={ItemBox}>
        <div style={{flexBasis: '10%'}}>
            <div className='flex flex-col'>
                {mode === 'routine' ? <span>아이콘</span> : <span className='w-4 h-4 rounded-full bg-amber-300'></span>}
            </div>
        </div>
        <div style={{flexBasis: '80%'}}>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div className='flex flex-row gap-2'>
                {mode === 'routine' ? 
                    <>
                        <span>{item.time}</span>
                        <span>{item.duration}</span>
                    </>
                : 
                <>
                    <span>{item.range}</span>
                    <span>{item.venue}</span>
                </>
                }
            </div>
        </div>
        <div style={{flexBasis: '10%'}}>
            <div className='flex flex-col'>
                <EditIcon />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem