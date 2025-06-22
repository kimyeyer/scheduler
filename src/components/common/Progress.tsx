import React from 'react'

interface ProgressProps {
  value: number;
  max?: number;
  size?: 'small' | 'medium' | 'large';
  width?: string;
  height?: string;
}

const Progress = ({ value, max = 100, width = '100%', height = '8px', size = 'medium' }: ProgressProps) => {
  const percentage = Math.min(Math.max(0, value), max) / max * 100;
  const sizeClass = size === 'small' ? 'h-2' : size === 'large' ? 'h-4' : 'h-3';
  return (
    <div 
      className={`relative overflow-hidden rounded-sm w-full ${sizeClass} `}
    >
      <div 
        className={`absolute left-0 top-0 h-full transition-all duration-300 ${sizeClass} bg-emerald-200 `} 
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  )
}

export default Progress
