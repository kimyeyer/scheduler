import React from 'react'

interface TabProps {
  options: {key: string, label: string, index: number}[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export const Tab = ({ options, selectedIndex, onSelect }: TabProps) => {

  return (
    <div className="flex flex-row overflow-hidden w-full rounded-sm bg-gray-200 p-1">
      {options.map((option, index) => (
        <div 
          key={option.key} 
          className={`flex-1 cursor-pointer px-2.5 py-1.5 flex items-center justify-center transition-colors duration-200 ${
            selectedIndex === index ? 'bg-white' : 'bg-gray-200'} rounded-sm`} 
          onClick={() => onSelect(index)}
        >
          <p className={`text-sm ${selectedIndex === index ? 'font-bold' : 'font-normal'}`}>{option.label}</p>
        </div>
      ))}
    </div>
  )
}
