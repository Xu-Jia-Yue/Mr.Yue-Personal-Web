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
          <a
            className='item mall'
            href='https://xu-jia-yue.github.io/Yue_s_Mall/#/'
            target='blank'
          >
            <img src='/src/images/logo3.png' alt='' />
            <span>Yue`s Mall</span>
          </a>
          <a
            className='item'
            href='https://xu-jia-yue.github.io/Vue3_VisualProject/'
            target='blank'
          >
            <img src='/src/images/map.png' alt='' />
            <span>echart可视化</span>
          </a>
          <a
            className='item event'
            href='https://xu-jia-yue.github.io/Vue3_ArticlesManage/#/login'
            target='blank'
          >
            <img src='/src/images/bigEvent.png' alt='' />
            <span>大事件</span>
          </a>
          <a
            className='item hr'
            href='https://github.com/Xu-Jia-Yue/Vue3_HR'
            target='blank'
          >
            <img src='/src/images/logo.png' alt='' />
            <span>人力资源管理系统</span>
          </a>
        </div>
      </div>
      <div className='ReactPro'>
        <h2 className='animate__animated animate__flipInX'>React Program</h2>
        <div className='codeContent'>
        <a
            className='item event'
            href='https://xu-jia-yue.github.io/React_jikeyuan/#/login'
            target='blank'
          >
            <img src='/src/images/jky.png' alt='' />
            <span>极客园</span>
          </a>
          <a className='item' href='/'>
            <img src='/src/images/神秘人.png' alt='' />
            <span>个人网站</span>
          </a>
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
