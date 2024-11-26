'use client'

import Image from 'next/image'

export default function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <Image 
        src="https://i.sstatic.net/kOnzy.gif" 
        alt="Loading..."
        width={20}
        height={20}
        className="opacity-50"
      />
    </div>
  )
} 