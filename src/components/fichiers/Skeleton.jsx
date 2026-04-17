import React from 'react'

const Skeleton = ({ className = '', lines = 3 }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-slate-200 dark:bg-slate-700 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          } ${index === 0 ? 'h-4' : 'h-3'}`}
        />
      ))}
    </div>
  )
}

export default Skeleton