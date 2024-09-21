import { NavLink, Outlet } from 'react-router-dom'
import './index.scss'
import logo from '@/images/神秘人.png'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export default function Layout() {
  const navList = ['HOME', 'BLOG', 'CODE', 'ABOUT']
  const [nowTime, setTime] = useState(dayjs().format('HH:mm:ss'))
  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'))
    }, 1000)
  })

  return (
    <div className='container'>
      {/* 导航 */}
      <div className='nav-top'>
        <ul className='nav-menu'>
          <li>
            <img src={logo} alt='' />
          </li>
          {navList.map((item) => {
            return (
              <li key={item}>
                <NavLink
                  to={item === 'HOME' ? '/' : item.toLowerCase()}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className='nav-date'>
          <img src='/src/images/时间.png' alt='' className='timeIcon' />
          <div className='time'>{nowTime}</div>
        </div>
      </div>
      {/* 主题内容 */}
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}
