import './index.scss'
import csnd from '@/images/csdn.png'
import github from '@/images/github.png'
import refresh from '@/images/刷新.png'
import detail from '@/images/团型说明.png'
import edit from '@/images/设置.png'
import like from '@/images/点赞svg.png'
import DialogBox from '@/pages/Home/component/EditModal'
import { useState } from 'react'
import 'animate.css'
import LikeFn from './util/useLIke'

export default function Home() {
  const [show, setShow] = useState({ flag: false, num: 1 })
  const toggleBox = () => {
    setShow({ flag: true, num: Math.random() })
  }

  return (
    <div className='home'>
      {/* 入站标题 */}
      <div className='title'>
        <span>
          ( ^<span className='mouse animate__animated animate__shakeX'>３</span>
          ^ ) <span className='hand animate__animated animate__shakeY'>╱</span>
          Hey Bro
        </span>
        <br />
        <span className='lastTitle animate__animated animate__tada'>
          Welcome To This Website !!!
        </span>
      </div>

      {/* 底部导航 */}
      <div className='iconList'>
        <div className='item'>
          <a
            href='https://blog.csdn.net/Lil_y1?spm=1000.2115.3001.5343'
            target='_blank'
          >
            <img src={csnd} alt={'csdn'} />
            <br />
            <b>csnd</b>
          </a>
        </div>
        <div className='item'>
          <a href='https://blog.csdn.net/Lil_y1?spm=1000.2115.3001.5343'></a>
          <img src={github} alt={'github'} />
          <br />
          <b>github</b>
        </div>
        <div className='item' onClick={() => window.location.reload()}>
          <img src={refresh} alt={'刷新'} />
          <br />
          <b>刷新</b>
        </div>
        <div className='item'>
          <img src={detail} alt={'说明'} />
          <br />
          <b>说明</b>
        </div>
        <div className='item' onClick={toggleBox}>
          <img src={edit} alt={'设置'} />
          <br />
          <b>设置</b>
        </div>
        <div className='item' onClick={(e) => LikeFn(e)}>
          <img src={like} alt={'点赞'} />
          <br />
          <b>点赞</b>
        </div>
      </div>

      {/* 页面底部 */}
      <footer>
        <div>
          <span className='const'>const&nbsp;</span>
          <span>&nbsp;Birthday = 2002/02/06</span>
        </div>
        <div>
          <b>WWW.LIL_Y.COM</b>
        </div>
        <div>
          <span className='const'>const&nbsp;</span>
          <span>&nbsp;Address = 江西省上饶市</span>
        </div>
      </footer>

      {/* 对话框 */}
      <DialogBox isShow={show} />
    </div>
  )
}
