import { useEffect, useState } from 'react'
import xf from '@/images/信封.png'
import './index.scss'
import 'animate.css'
import { getLoveSay } from '@/util/useGetLovesay'
import cloud from '@/images/cloud.png'
import myPhoto from '@/images/myPhoto.jpg'
import sx from '@/images/lover刷新.png'
import wechat from '@/images/myWeChat.jpg'
import git from '@/images/mygit.png'

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
            <img
              src={xf}
              alt=''
              className='animate__fadeInLeft animate__animated'
            />
            <h4>2338699727@QQ.com</h4>
          </div>
        </div>
      </div>
      <div className='introduce'>
        <h3>About Me</h3>
        <div className='clouds'>
          <div className='item1'>
            <img src={cloud} alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#水瓶座</h4>
          </div>
          <div className='item2'>
            <img src={cloud} alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#00后</h4>
          </div>
          <div className='item3'>
            <img src={cloud} alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#前端新秀</h4>
          </div>
          <div className='item4'>
            <img src={cloud} alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#嘻哈</h4>
          </div>
          <div className='item5'>
            <img src={cloud} alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#伪文艺</h4>
          </div>
          <div className='item6'>
            <img src={cloud} alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#INFP</h4>
          </div>
          <div className='item7'>
            <img src={cloud} alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#现实主义</h4>
          </div>
          <div className='item8'>
            <img src={cloud} alt='' />
            <h4 className='animate__animated animate__zoomInDown'>#闷骚</h4>
          </div>
        </div>
        <div className='sentence'>
          <img
            src={myPhoto}
            alt=''
            className='tx animate__animated animate__rotateIn'
          />
          <div className='dialog'>
            <p className='LoverContent'>{loveSay}</p>
            <img src={sx} alt='' onClick={setLover} className='sx' />
          </div>
        </div>
        <p className='footerText'>乌托邦的现实主义</p>
      </div>
      <div className='right'>
        <div className='weChat'>
          <h3>WeChat</h3>
          <div className='main'>
            <img src={wechat} alt='' />
            <h4>XJY--Lucky</h4>
          </div>
        </div>
        <div className='github'>
          <h3>GitHub</h3>
          <div className='main'>
            <img
              src={git}
              alt=''
              className='animate__fadeInRight animate__animated'
            />
            <h4>https://github.com/Xu-Jia-Yue</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
