import React from 'react'
export default function Button({children, ...props}: any){
  return <button className="px-4 py-2 bg-blue-600 text-white rounded" {...props}>{children}</button>
}
