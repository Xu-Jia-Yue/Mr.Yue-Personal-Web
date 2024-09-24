import { useEffect, useState } from 'react'
import './index.scss'
import 'animate.css'
import { getLoveSay } from '@/util/useGetLovesay'

export default function About() {
  const [loveSay, setLovesay] = useState('')
  const setLover = () => {
    const content = getLoveSay()
    setLovesay(content)
  }
  useEffect(() => {
    setLover()
  }, [])
  return (
    <div className='about'>
      <div className='left'>
        <div className='where'>
          <h3>Where</h3>
          <div className='main'>
            <h4>Jiang Xi</h4>
            <h4>Shang Hai</h4>
          </div>
        </div>
        <div className='mail'>
          <h3>Mail</h3>
          <div className='main'>
            <img src='/src/images/信封.png' alt='' />
            <h4>2338699727@QQ.com</h4>
          </div>
        </div>
      </div>
      <div className='introduce'>
        <h3>About Me</h3>
        <div className='clouds'>
          <div className='item1'>
            <img src='/src/images/cloud.png' alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#水瓶座</h4>
          </div>
          <div className='item2'>
            <img src='/src/images/cloud.png' alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#00后</h4>
          </div>
          <div className='item3'>
            <img src='/src/images/cloud.png' alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#前端新秀</h4>
          </div>
          <div className='item4'>
            <img src='/src/images/cloud.png' alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#嘻哈</h4>
          </div>
          <div className='item5'>
            <img src='/src/images/cloud.png' alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#伪文艺</h4>
          </div>
        </div>
        <div className='sentence'>
          <img src='/src/images/myPhoto.jpg' alt='' className='tx' />
          <div className='dialog'>
            <p className='LoverContent'>{loveSay}</p>
            <img
              src='/src/images/lover刷新.png'
              alt=''
              onClick={setLover}
              className='sx'
            />
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='weChat'>
          <h3>WeChat</h3>
          <div className='main'>
            <img src='/src/images/myWeChat.jpg' alt='' />
            <h4>XJY--Lucky</h4>
          </div>
        </div>
        <div className='github'>
          <h3>GitHub</h3>
          <div className='main'>
            <img src='/src/images/mygit.png' alt='' />
            <h4>https://github.com/Xu-Jia-Yue</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
