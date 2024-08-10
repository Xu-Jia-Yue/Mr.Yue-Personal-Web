import './index.scss'
import csnd from '@/images/csdn.png'
import github from '@/images/github.png'
import refresh from '@/images/刷新.png'
import detail from '@/images/团型说明.png'
import edit from '@/images/设置.png'
import like from '@/images/点赞svg.png'

export default function Home() {
  const homeList = [
    { img: csnd, name: 'csnd' },
    { img: github, name: 'github' },
    { img: refresh, name: '刷新' },
    { img: detail, name: '说明' },
    { img: edit, name: '设置' },
    { img: like, name: '点赞' },
  ]
  return (
    <div className='home'>
      <div className='title'>
        <span>( ^３^ )╱ Hey Bro</span>
        <br />
        <span className='lastTitle'>Welcome To This Website !!!</span>
      </div>
      <div className='iconList'>
        {homeList.map((item) => {
          return (
            <div className='item'>
              <img src={item.img} alt={item.name} />
              <br />
              <b>{item.name}</b>
            </div>
          )
        })}
      </div>
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
    </div>
  )
}
