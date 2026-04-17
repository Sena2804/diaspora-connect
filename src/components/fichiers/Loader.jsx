import React from 'react'

const Loader = ({ size = 'md', color = 'emerald', variant = 'spinner' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    emerald: 'border-emerald',
    blue: 'border-blue-500',
    white: 'border-white'
  }

  if (variant === 'dots') {
    return (
      <div className="flex gap-2 items-center justify-center">
        <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
        <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
        <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
      </div>
    )
  }

  if (variant === 'bar') {
    return (
      <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-transparent via-emerald to-transparent animate-shimmer"></div>
      </div>
    )
  }

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} border-4 border-t-transparent rounded-full animate-spin`}></div>
  )
}

export default Loader