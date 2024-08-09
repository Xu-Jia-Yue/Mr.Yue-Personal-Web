// import React from 'react'

import { useState } from "react"

export default function Home() {
  const [a, s] = useState('1')
  console.log(a,s);
  
  return (
    <div>
      <div>Home</div>
    </div>
  )
}
