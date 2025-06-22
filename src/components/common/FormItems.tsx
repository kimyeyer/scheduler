import React from 'react';

const ItemLabelStyle = `block text-sm font-medium text-gray-700 mb-1`
const ItemInputStyle = `w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`
const ButtonDefaultStyle = `px-4 py-2 text-white rounded-md focus:outline-none`
export const ItemText = ({ label, placeholder, }: { label: string, placeholder: string }) => {
    return (
      <div>
        <label className={ItemLabelStyle}>
          {label}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className={ItemInputStyle}
        />
      </div>
    )
  }
  
export const ItemTextarea = ({ label, placeholder, }: { label: string, placeholder: string }) => {
    return (
      <div>
        <label className={ItemLabelStyle}>
          {label}
        </label>
        <textarea
          placeholder={placeholder}
          className={ItemInputStyle}
        />
      </div>
    )
  }
 export const ItemTime = ({mode}: {mode: 'date' | 'range'}) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <label className={ItemLabelStyle}>
            {mode === 'date' ? '날짜' : '시작'}
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              placeholder="날짜를 선택하세요."
              className={ItemInputStyle}
            />
            <input
              type="time"
              placeholder="시간을 선택하세요."
              className={ItemInputStyle}
            />
          </div>
        </div>
        {mode === 'range' && (
          <div className="flex-1">
            <label className={ItemLabelStyle}>
              종료
            </label>
            <div className="flex gap-2">
              <input
                type="date"
                placeholder="날짜를 선택하세요."
                className={ItemInputStyle}
              />
              <input
                type="time"
                placeholder="시간을 선택하세요."
                className={ItemInputStyle}
              />
              </div>
          </div>
        )}
      </div>
    )
  }
export const FormButtonGroup = ({buttons}: {buttons: {label: string, onClick: () => void, type?: 'default' | 'primary'}[]}) => {
    return (    
      <div className="flex justify-end gap-3 mt-8">
        {buttons.map((button) => (
          <FormButton key={button.label} {...button} />
        ))}
      </div>
    )
  }
export const FormButton = ({label, onClick, type='default'}: {label: string, onClick: () => void, type?: 'default' | 'primary'}) => {
    return (
      <button 
        className={`${ButtonDefaultStyle} ${type === 'primary' ? 'bg-gray-100 hover:bg-gray-200' : 'bg-color-active hover:bg-color-active-hover'}` }
        onClick={onClick}
    >
        {label}
      </button>
    )
  }