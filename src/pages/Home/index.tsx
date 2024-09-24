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
import Like from '@/components/Like'
import Detail from './component/DetailModal'

export default function Home() {
  const [boxShow, setShow] = useState({ flag: false, num: 1 })
  const [likeShow, setLikeShow] = useState({ flag: false, num: 1 })
  const [detailShow, setDetailShow] = useState({ flag: false, num: 1 })
  const toggleBox = () => {
    setShow({ flag: true, num: Math.random() })
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleLike = (e: any) => {
    setLikeShow({ flag: true, num: Math.random() })
    LikeFn(e)
  }

  const toggleDetail = () => {
    setDetailShow({ flag: true, num: Math.random() })
  }

  return (
    <div className='home'>
      {/* 入站标题 */}
      <div className='title'>
        <span>
          (๑^
          <span className='mouse animate__animated animate__shakeX'>o</span>
          ^๑)づ<span className='hand animate__animated animate__shakeY'>♡</span>
          <span className='hey animate__animated animate__flip'>Hey Bro</span>
        </span>
        <br />
        <span className='animate__animated animate__tada lastTitle'>
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
          <a
            href='https://github.com/Xu-Jia-Yue'
            target='_blank'
          >
            <img src={github} alt={'github'} />
            <br />
            <b>github</b>
          </a>
        </div>
        <div className='item' onClick={() => window.location.reload()}>
          <img src={refresh} alt={'刷新'} />
          <br />
          <b>刷新</b>
        </div>
        <div className='item' onClick={toggleDetail}>
          <img src={detail} alt={'说明'} />
          <br />
          <b>说明</b>
        </div>
        <div className='item' onClick={toggleBox}>
          <img src={edit} alt={'设置'} />
          <br />
          <b>设置</b>
        </div>
        <div className='item' onClick={(e: unknown) => toggleLike(e)}>
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
      <DialogBox isShow={boxShow} />
      <Like isShow={likeShow} />
      <Detail isShow={detailShow} />
    </div>
  )
}
