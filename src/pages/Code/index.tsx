// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

export default function Code() {
  const navigate = useNavigate()
  return (
    <div className='code'>
      <div className='VuePro'>
        <h2 className='animate__animated animate__flipInX'>Vue Program</h2>
        <div className='codeContent'>
          <div className='item'>
            <img src='/src/images/rabbit.png' alt='' />
            <span>小兔鲜商城</span>
          </div>
          <div className='item'>
            <img src='/src/images/map.png' alt='' />
            <span>echart可视化</span>
          </div>
        </div>
      </div>
      <div className='ReactPro'>
        <h2 className='animate__animated animate__flipInX'>React Program</h2>
        <div className='codeContent'>
          <div className='item'>
            <img src='/src/images/神秘人.png' alt='' />
            <span>小兔鲜商城</span>
          </div>
          <div className='item'>
            <img src='/src/images/神秘人.png' alt='' />
            <span>小兔鲜商城</span>
          </div>
        </div>
      </div>
      <div className='more'>
        <p className='view' onClick={() => navigate('/about')}>
          <span className='allow'> ➜ </span>
          <span className='text'>View More</span>
        </p>
      </div>
    </div>
  )
}
